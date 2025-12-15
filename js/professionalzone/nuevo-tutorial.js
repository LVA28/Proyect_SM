function onLoadNuevoTutorial() {

    // Referencias
    const fileInput = document.getElementById('video-file');
    const placeholder = document.getElementById('upload-placeholder');
    const videoPreview = document.getElementById('video-preview');
    const videoContainer = document.getElementById('video-container');
    const btnChangeVideo = document.getElementById('btn-change-video');
    const form = document.getElementById('tutorial-form');

    const tutorialId = sessionStorage.getItem("tutorialId");

    let tutorials = JSON.parse(sessionStorage.getItem("mytutorials"))


    if(tutorialId != "new")
    {
        document.querySelector('#title').textContent = "EDITAR TUTORIAL"

        const tuto = tutorials.filter(n => n.id == tutorialId)[0]
        
        document.querySelector('#video-name').value = tuto.name;
        document.querySelector('#video-desc').value = tuto.description;
        document.querySelector('#video-tags').value = tuto.tags;
        if (tuto.videoUrl.startsWith('blob')) {
            videoPreview.src = tuto.videoUrl;
            } else {
            videoPreview.src = '/resources/images/tutorials/videos/' + tuto.videoUrl;
            }


        placeholder.classList.add('d-none');     // Oculta el "+ INSERTAR"
        videoPreview.classList.remove('d-none'); // Muestra el reproductor
        btnChangeVideo.classList.remove('d-none'); // Muestra el botón de cambiar

    } 


    // 1. ESCUCHAR CAMBIOS EN EL INPUT
    // Esto se activa automáticamente cuando eliges un archivo en la ventana
    fileInput.addEventListener('change', (e) => {
        console.log("Archivo seleccionado..."); // Para depurar

        const file = e.target.files[0];

        if (file) {
            console.log("Archivo detectado:", file.name);
            
            // Crear URL temporal para ver el video
            const fileUrl = URL.createObjectURL(file);
            videoPreview.src = fileUrl;
            
            // Gestión visual: Ocultar texto, mostrar video
            placeholder.classList.add('d-none');     // Oculta el "+ INSERTAR"
            videoPreview.classList.remove('d-none'); // Muestra el reproductor
            btnChangeVideo.classList.remove('d-none'); // Muestra el botón de cambiar

            // Cambiar estilo del borde a sólido
            videoContainer.style.borderStyle = 'solid';
            videoContainer.style.backgroundColor = 'black';
        }
    });

    // 2. ENVIAR FORMULARIO
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('video-name').value;
        const video = videoPreview.src;

        if (!nombre || !video) {
            alert('Falta el nombre o el vídeo.');
            return;
        }



        let name = document.querySelector('#video-name').value;
        let description = document.querySelector('#video-desc').value;
        let tags = document.querySelector('#video-tags').value.split(',');

        if (tutorialId != "new")
        {
            const tuto = tutorials.filter(n => n.id == tutorialId)[0]
            const tutoIndex = tutorials.indexOf(tuto)

            tuto.name = name;
            tuto.description = description;
            tuto.tags = tags;
            tuto.videoUrl = videoPreview.src;

            tutorials[tutoIndex] = tuto;
        } else {
            const tuto = new Tutorial(Math.max(...tutorials.map(n => n.id)) + 1, -1, name, videoPreview.src, "", description, tags, 0, new Date())

            tutorials.push(tuto)
        }

        sessionStorage.setItem("mytutorials", JSON.stringify(tutorials))

        loadContent("my-tutorials.html", null, "4", 'professional')
    });
}