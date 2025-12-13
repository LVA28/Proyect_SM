'use strict'

document.addEventListener('DOMContentLoaded', () =>{
    const usernameInput = document.querySelector('#username')

    document.querySelector('#btnlog').addEventListener('click', () =>{
        sessionStorage.setItem("username", usernameInput.value)
        sessionStorage.setItem("email", usernameInput.value + "@gmail.com")
        window.location.href = "../html/sharedcontent/choose_area.html"
    })

    if (sessionStorage.getItem("loadcontent") != 'false')
    {
        console.log("llamando a loadFake Data")
        loadFakeData();
    }
})