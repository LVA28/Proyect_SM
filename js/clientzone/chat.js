'use strict'





function validateText(text)
{
    return text.length != 0
}

function showMessages(messages, user, destinationUser)
{
    messages.forEach(n => sendMessage(n, user, destinationUser, n.userId === user.id))
}

function sendMessage(message, user, destinationUser, isUser = true)
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

let messageInput;
let sendButton;
let messageTemplate;
let messagesContainer;


function onLoadChat() {


    let repairId = sessionStorage.getItem("repairId")
    let chatId = sessionStorage.getItem("chatId")

    let totalMessages = JSON.parse(sessionStorage.getItem("chats")) 
    let messages = totalMessages.filter(n => n.chatId == chatId)


    let user = new User(-1, sessionStorage.getItem("username"), "", "", "https://i.pinimg.com/originals/e0/0f/a4/e00fa451a73e0ee92c5e6706a907625e.jpg");
    let destinationUser = JSON.parse(sessionStorage.getItem("users")).filter(n => n.id == sessionStorage.getItem("userId"))[0]

    console.log(destinationUser)

    let canSend = false;

    function newMessage(content, user, destinationUser, isUser = true)
    {
        return new ChatMessage(-1, isUser ? user.id : destinationUser.id, repairId, chatId, new Date(), content)
    }
    function processMessage(user, destinationUser, isUser = true)
    {
        const message = newMessage(messageInput.value, user, destinationUser, isUser)
        sendMessage(message, user, destinationUser, isUser)
        totalMessages.push(message)
        sessionStorage.setItem("chats", JSON.stringify(totalMessages))
        messageInput.value = ""
        messageInput.dispatchEvent(new Event('input'))
    }



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
            processMessage(user, destinationUser);
        }
    })

    showMessages(messages, user, destinationUser)

    messageInput.addEventListener('input', (e) =>{
        canSend = validateText(e.target.value)
        sendButton.inert = !canSend;
    })

    sendButton.addEventListener('click', processMessage)
}

