'use strict'

document.addEventListener('DOMContentLoaded', () =>{
    const usernameInput = document.querySelector('#username')

    document.querySelector('#login').addEventListener('click', () =>{
        sessionStorage.setItem("username", usernameInput.value)
        window.location.href = "../html/sharedcontent/choose_area.html"
    })

    if (sessionStorage.getItem("loadcontent") != 'false')
    {
        loadFakeData();
    }
})