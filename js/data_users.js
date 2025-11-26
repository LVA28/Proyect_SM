import * as D_U from "classes.js"

'use strict'

document.addEventListener('DOMContentLoader', () =>{

})

// Helper functions to generate random data
function getRandomId() {
    return Math.random().toString(36).substr(2, 9);
}

function getRandomUsername() {
    const adjectives = ["Fast", "Silent", "Bright", "Dark", "Crazy", "Lucky", "Brave", "Clever"];
    const nouns = ["Tiger", "Eagle", "Shark", "Lion", "Falcon", "Wolf", "Bear", "Panther"];
    return adjectives[Math.floor(Math.random() * adjectives.length)] + 
           nouns[Math.floor(Math.random() * nouns.length)] + 
           Math.floor(Math.random() * 1000);
}

function getRandomEmail() {
    const domains = ["example.com", "mail.com", "test.org", "demo.net"];
    const username = getRandomUsername().toLowerCase();
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${username}@${domain}`;
}

function getRandomPassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < 10; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Generate 75 random users
function create_users(){
    for (let i = 0; i < 75; i++) {
        const id = getRandomId();
        const username = getRandomUsername();
        const email = getRandomEmail();
        const password = getRandomPassword();

        users.push(new User(id, username, email, password));
    }
    return users
}

console.log(users);