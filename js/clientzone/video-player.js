'use strict'

function onLoadVideoPlayer() {
    let video = JSON.parse(sessionStorage.getItem("tutorials")).filter(n => n.id == sessionStorage.getItem("videoId"))[0]

    document.querySelector('#video-title').textContent = video.name

    let tagsContainer = document.querySelector('.tags')

    document.querySelector('#video-player').src = video.videoUrl;
    document.querySelector('#player').load()

    video.tags.forEach(t => {
        const p = document.createElement("p")
        p.textContent = t;
        tagsContainer.appendChild(p)
    })

    document.querySelector('.description').textContent = video.description;


}