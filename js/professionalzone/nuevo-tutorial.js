document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica para el botón de "Subir Video" ---
    const uploadArea = document.getElementById('video-upload-area');
    const fileInput = document.getElementById('video-file');
    
    // Al hacer clic en la caja grande, activamos el input file oculto
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    // Cuando el usuario elige un archivo, cambiamos el texto de la caja
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            const fileName = e.target.files[0].name;
            uploadArea.innerHTML = `
                <div class="text-center text-success">
                    <span class="fs-1">🎥</span><br>
                    <strong>${fileName}</strong><br>
                    <small>Listo para subir</small>
                </div>
            `;
            // Quitamos el borde discontinuo para indicar que ya está "lleno"
            uploadArea.style.borderStyle = 'solid'; 
        }
    });


    const form = document.getElementById('tutorial-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Capturamos los datos
        const nombre = document.getElementById('video-name').value;
        const descripcion = document.getElementById('video-desc').value;
        const etiquetas = document.getElementById('video-tags').value;
        const video = fileInput.files[0];

        // Validación simple
        if (!nombre || !descripcion || !video) {
            alert('XD');
            return;
        }

        // Simulación de éxito
        console.log("Datos del Nuevo Tutorial:", { nombre, descripcion, etiquetas, videoName: video.name });
        alert('¡Tutorial creado correctamente!');
        
        // Opcional: Redirigir a la lista de tutoriales
        // window.location.href = 'mis-tutoriales.html';
    });
});