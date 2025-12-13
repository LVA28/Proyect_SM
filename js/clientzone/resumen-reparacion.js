function onLoadResumenReparacion() {
    const myRepairs = JSON.parse(sessionStorage.getItem("myrepairs"))
    const repairingId = sessionStorage.getItem("repairId")
    let repairPos = 0;
    let interestedUsers = [];

    const repair = repairingId != "new" ? myRepairs.filter(n => n.id == repairingId)[0] : new RepairApplication(Math.max(...myRepairs.map(n => n.id)) + 1, -1, "", 0, "", "", "", [], [])

    if(repairingId == "new")
    {
        document.querySelector('#title').textContent = "NUEVA REPARACIÓN"

        document.querySelector('.persons').opacity = 0;
    } else {
        repairPos = myRepairs.indexOf(repair)
        const users = JSON.parse(sessionStorage.getItem("users"))
        interestedUsers = users.filter(n => repair.interestedPersons.includes(n.id))
    }

    // --- FUNCIÓN: Cargar datos en el formulario ---
    function loadFormData() {
        document.getElementById('repair-name').value = repair.name;
        document.getElementById('repair-location').value = repair.location;
        document.getElementById('repair-desc').value = repair.description;
        document.getElementById('repair-tags').value = repair.tags;
        document.getElementById('repair-price').value = repair.price;
    }

    function unloadFormData()
    {
        repair.name = document.getElementById('repair-name').value
        repair.location = document.getElementById('repair-location').value
        repair.description = document.getElementById('repair-desc').value
        repair.tags = document.getElementById('repair-tags').value.split(',')
        repair.price = document.getElementById('repair-price').value
    }

    // --- FUNCIÓN: Renderizar la lista de interesados ---
    function renderInterestedPeople() {
        const container = document.getElementById('interested-list');
        container.innerHTML = ''; // Limpiar

        interestedUsers.forEach(person => {
            // Crear el contenedor de la fila (Estilo borde negro redondeado)
            const row = document.createElement('div');
            row.className = 'd-flex align-items-center border border-2 border-dark rounded-pill p-2 ps-3';
            row.style.width = '100%';
            row.style.maxWidth = '500px'; // Ancho máximo para que no se estire demasiado
            row.style.backgroundColor = 'white';

            // Crear el círculo del icono (Simulado)
            const iconCircle = document.createElement('div');
            iconCircle.className = 'rounded-circle border border-dark d-flex justify-content-center align-items-center me-3';
            iconCircle.style.width = '40px';
            iconCircle.style.height = '40px';
            // Icono SVG simple dentro
            iconCircle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
            `;

            // Crear el texto del nombre
            const nameSpan = document.createElement('span');
            nameSpan.className = 'fw-bold text-uppercase';
            nameSpan.textContent = person.username;

            // Unir todo
            row.appendChild(iconCircle);
            row.appendChild(nameSpan);
            
            row.addEventListener('click', () =>{
                sessionStorage.setItem("repairId", repairingId)
                sessionStorage.setItem("chatId", repair.interestedPersonsChats[interestedUsers.indexOf(person)])
                sessionStorage.setItem("userId", repair.interestedPersons[interestedUsers.indexOf(person)])
                loadContent("chat.html", null, "9", 'client')
            })

            container.appendChild(row);
        });
    }
    const fileInput = document.getElementById('file-input');
    const btnAddImages = document.getElementById('btn-add-images');
    const placeholder = document.getElementById('upload-placeholder');
    const carousel = document.getElementById('preview-carousel');
    const carouselTrack = document.getElementById('carousel-track');

    // Funciones para abrir el selector de archivos
    const openFileSelector = () => fileInput.click();
    btnAddImages.addEventListener('click', openFileSelector);
    placeholder.addEventListener('click', openFileSelector);

    // Cuando el usuario selecciona archivos
    fileInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);

        if (files.length > 0) {
            // 1. Ocultar placeholder y mostrar carrusel
            placeholder.classList.add('d-none');
            carousel.classList.remove('d-none');
            
            // 2. Limpiar carrusel anterior
            carouselTrack.innerHTML = '';

            // 3. Procesar cada archivo para previsualizarlo
            files.forEach((file, index) => {
                const reader = new FileReader();
                
                reader.onload = (event) => {
                    // Crear el div del item del carrusel
                    const carouselItem = document.createElement('div');
                    // El primero debe tener la clase 'active'
                    carouselItem.className = `carousel-item h-100 ${index === 0 ? 'active' : ''}`;
                    
                    // Crear la imagen
                    const img = document.createElement('img');
                    img.src = event.target.result;
                    img.className = 'd-block w-100 h-100';
                    img.style.objectFit = 'contain'; // Para que la foto se vea entera sin recortarse
                    
                    carouselItem.appendChild(img);
                    carouselTrack.appendChild(carouselItem);
                };

                // Leer el archivo como URL de datos
                reader.readAsDataURL(file);
            });
        }
    });
    // --- Ejecutar al inicio ---
    loadFormData();
    renderInterestedPeople();

    // Evento del botón Actualizar
    document.getElementById('repair-summary-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Reparación actualizada correctamente');

        unloadFormData();

        if(repairingId == "new")
        {
            myRepairs.push(repair)
        } else {
            myRepairs[repairPos] = repair
        }

        sessionStorage.setItem("myrepairs", JSON.stringify(myRepairs))
        loadContent("my-repairings.html", null, "5", 'client')
    });
}