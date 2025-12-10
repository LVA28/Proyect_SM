document.addEventListener('DOMContentLoaded', () => {
    
    // Referencias
    const fileInput = document.getElementById('video-file');
    const placeholder = document.getElementById('upload-placeholder');
    const videoPreview = document.getElementById('video-preview');
    const videoContainer = document.getElementById('video-container');
    const btnChangeVideo = document.getElementById('btn-change-video');
    const form = document.getElementById('tutorial-form');

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
        const video = fileInput.files[0];

        if (!nombre || !video) {
            alert('Falta el nombre o el vídeo.');
            return;
        }

        alert(`¡Tutorial "${nombre}" subido con éxito!`);
        // Aquí podrías redirigir: window.location.href = 'catalogo-tutoriales.html';
    });
});