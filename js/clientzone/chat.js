'use strict'

function validateText(text) {
    return text && text.trim().length > 0;
}

function showMessages(messages, user, destinationUser) {
    messages.forEach(n => sendMessage(n, user, destinationUser, n.userId === user.id))
}

function sendMessage(message, user, destinationUser, isUser = true) {
    const msgFragment = messageTemplate.content.cloneNode(true);
    
    const row = msgFragment.querySelector('.message-row');
    const bubble = msgFragment.querySelector('.chat-bubble');
    const img = msgFragment.querySelector('.user-image');
    
    // Contenido
    msgFragment.querySelector('.content').textContent = message.content;
    
    // Fecha (formateada simple)
    let dateObj = new Date(message.date);
    let timeString = !isNaN(dateObj) 
        ? dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        : message.date;
    msgFragment.querySelector('.date').textContent = timeString;

    // Imagen
    img.src = isUser ? user.profilePicture : destinationUser.profilePicture;

    // --- LÓGICA DE ALINEACIÓN ---
    if (isUser) {
        // USUARIO: ALINEAR A LA DERECHA
        // 'flex-row-reverse' invierte el orden visual (Texto <- Imagen) y alinea al final (derecha)
        row.classList.add('flex-row-reverse'); 
        
        // Estilo de burbuja verde
        bubble.classList.add('bubble-user');
    } else {
        // OTRO: ALINEAR A LA IZQUIERDA (Por defecto flex-row)
        row.classList.add('justify-content-start');
        
        // Estilo de burbuja blanca
        bubble.classList.add('bubble-other');
    }

    messagesContainer.appendChild(msgFragment);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

let messageInput;
let sendButton;
let messageTemplate;
let messagesContainer;

function onLoadChat() {
    let repairId = sessionStorage.getItem("repairId");
    let chatId = sessionStorage.getItem("chatId");

    // Datos dummy o de session
    let storedChats = sessionStorage.getItem("chats");
    let totalMessages = storedChats ? JSON.parse(storedChats) : [];
    let messages = totalMessages.filter(n => n.chatId == chatId);

    let myUsername = sessionStorage.getItem("username") || "Yo";
    // Avatar por defecto para el usuario actual
    let user = new User(-1, myUsername, "", "", "https://i.pinimg.com/originals/e0/0f/a4/e00fa451a73e0ee92c5e6706a907625e.jpg"); 
    
    let storedUsers = sessionStorage.getItem("users");
    let destinationUser = storedUsers 
        ? JSON.parse(storedUsers).find(n => n.id == sessionStorage.getItem("userId")) 
        : null;

    if(Math.floor(Math.random() * 2) == 0) destinationUser = { username: "Desconocido", profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNNU6hAkRbRelTwgSw9HRMKqu_wn2i3Wm2g&s" };

    document.querySelector('.chatter-name').textContent = destinationUser.username;

    messagesContainer = document.querySelector('#messages-container');
    messageTemplate = document.querySelector('#message-template');
    messageInput = document.querySelector('#message-input');
    sendButton = document.querySelector('#send-button');

    let canSend = false;

    function processMessage() {
        if (!canSend) return;

        // Crear mensaje (isUser = true)
        const message = new ChatMessage(-1, user.id, repairId, chatId, new Date(), messageInput.value);
        
        // Enviar a la pantalla
        sendMessage(message, user, destinationUser, true);
        
        // Guardar
        totalMessages.push(message);
        sessionStorage.setItem("chats", JSON.stringify(totalMessages));
        
        messageInput.value = "";
        canSend = false;
        sendButton.disabled = true;
    }

    // Cargar mensajes previos
    showMessages(messages, user, destinationUser);

    messageInput.addEventListener('keydown', (e) => {
        if (e.key === "Enter" && canSend) {
            e.preventDefault();
            processMessage();
        }
    });

    messageInput.addEventListener('input', (e) => {
        canSend = validateText(e.target.value);
        sendButton.disabled = !canSend;
        
        if(canSend) {
            sendButton.classList.remove('btn-outline-dark');
            sendButton.classList.add('btn-primary');
        } else {
            sendButton.classList.add('btn-outline-dark');
            sendButton.classList.remove('btn-primary');
        }
    });

    sendButton.addEventListener('click', processMessage);
    sendButton.disabled = true; // Estado inicial
}