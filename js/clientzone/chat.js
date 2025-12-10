'use strict'

const messages = [
    new ChatMessage(0, 1, new Date(), "Hola, ¿sigues teniendo disponible la reparación?"),
    new ChatMessage(1, 2, new Date(), "Sí, sigue disponible. ¿Qué problema tienes?"),
    new ChatMessage(2, 1, new Date(), "La pantalla del móvil está rota."),
    new ChatMessage(3, 2, new Date(), "Perfecto, ¿es Android o iPhone?"),
    new ChatMessage(4, 1, new Date(), "Es un Samsung."),
    new ChatMessage(5, 2, new Date(), "De acuerdo, ese modelo tiene arreglo."),
    new ChatMessage(6, 1, new Date(), "¿Cuánto costaría más o menos?"),
    new ChatMessage(7, 2, new Date(), "Entre 60 y 80€, depende del daño."),
    new ChatMessage(8, 1, new Date(), "Vale, me parece correcto."),
    new ChatMessage(9, 2, new Date(), "¿Cuándo te vendría bien traerlo?"),
    new ChatMessage(10, 1, new Date(), "Mañana por la tarde si es posible."),
    new ChatMessage(11, 2, new Date(), "Perfecto, a partir de las 17:00 estoy disponible."),
    new ChatMessage(12, 1, new Date(), "Genial, allí estaré."),
    new ChatMessage(13, 2, new Date(), "Tráeme también el cargador por si acaso."),
    new ChatMessage(14, 1, new Date(), "De acuerdo, lo llevaré."),
    new ChatMessage(15, 2, new Date(), "Cualquier cosa me escribes."),
    new ChatMessage(16, 1, new Date(), "Muchas gracias por todo."),
    new ChatMessage(17, 2, new Date(), "Gracias a ti."),
    new ChatMessage(18, 1, new Date(), "Hasta mañana entonces."),
    new ChatMessage(19, 2, new Date(), "Hasta mañana, que tengas buen día.")
];


let user = new User(1, "Juan", "", "", "https://i.pinimg.com/originals/e0/0f/a4/e00fa451a73e0ee92c5e6706a907625e.jpg");
let destinationUser = new User(2, "Pepe", "", "", "https://i.pinimg.com/564x/f3/42/d8/f342d88b382ba9c01e4bfef7d01eb29b.jpg");
let messageInput;
let sendButton;
let messageTemplate;
let messagesContainer;

let canSend = false;

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector('.chatter-name').textContent = destinationUser.username

    messagesContainer = document.querySelector('.messages-container')
    messageTemplate = document.querySelector('#message-template')
    messageInput = document.querySelector('#message-input')
    sendButton = document.querySelector('#send-button')

    sendButton.inert = !canSend

    messageInput.addEventListener('keydown', (e) => {
        if (e.key === "Enter" && canSend)
        {
            e.preventDefault();
            e.stopPropagation();
            processMessage();
        }
    })

    showMessages(generateRepairConversations()[4].messages)

    messageInput.addEventListener('input', (e) =>{
        canSend = validateText(e.target.value)
        sendButton.inert = !canSend;
    })

    sendButton.addEventListener('click', processMessage)
})

function processMessage(isUser = true)
{
    const message = newMessage(messageInput.value, isUser)
    sendMessage(message)
    messageInput.value = ""
    messageInput.dispatchEvent(new Event('input'))
}

function newMessage(content, isUser = true)
{
    return new ChatMessage(-1, isUser ? user.id : destinationUser.id, new Date(), content)
}

function validateText(text)
{
    return text.length != 0
}

function showMessages(messages)
{
    messages.forEach(n => sendMessage(n, n.userId === user.id))
}

function sendMessage(message, isUser = true)
{
    const msg = messageTemplate.content.cloneNode(true);

    msg.querySelector('.content').textContent = message.content
    msg.querySelector('.date').textContent = message.date
    msg.querySelector('.user-image').src = isUser ? user.profilePicture : destinationUser.profilePicture

    if (isUser)
    {
        msg.querySelector('.message').classList.add('reverse')
    }

    messagesContainer.appendChild(msg)
}