const loadedScripts = new Set();

const USERS_COUNT = 10;


function loadContent(target, clickedButton, id, zone = 'client') {
    console.log("Saving " + target + " for zone " + zone)
    sessionStorage.setItem(zone == 'client' ? "lastclientzone" : "lastprofessionalzone", target)
    sessionStorage.setItem(zone == 'client' ? "lastclientzoneid" : "lastprofessionalzoneid", id)

    const main = document.getElementById('main-content');
    const navButtons = document.querySelectorAll('#sidebar-nav a[data-target]');
    main.innerHTML = '<p class="text-center text-muted p-5">Cargando...</p>';
    fetch(target)
        .then(r => r.text())
        .then(html => {
            main.innerHTML = html
            executeScripts(main).then(() => {
                switch (id)
                {
                    case "1":
                        onLoadCatalogo();
                        break;
                    case "2":
                        onLoadMisProductos();
                        break;
                    case "3":
                        onLoadMisReparaciones();
                        break;
                    case "4":
                        onLoadMisTutoriales();
                        break;
                    case "5":
                        onLoadMisSolicitudesDeReparaciones();
                        break;
                    case "6":
                        onLoadCatalogoDeObjetosALaVenta();
                        break;
                    case "7":
                        onLoadMisCompras();
                        break;
                    case "8":
                        onLoadCatalogoDeTutoriales();
                        break;
                    case "9":
                        onLoadChat();
                        break;
                    case "10":
                        onLoadNuevoTutorial();
                        break;
                    case "11":
                        onLoadResumenReparacion();
                        break;
                    case "12":
                        onLoadRepairResume();
                        break;
                    case "13":
                        onLoadVideoPlayer();
                        break;
                }
            })
        })
        .catch(() => main.innerHTML = '<div class="alert alert-danger">Error cargando contenido</div>');

    navButtons.forEach(
        btn => {
            btn.classList.remove('active')
            btn.inert = false;
        });
    if (clickedButton) {
        clickedButton.inert = true;
        clickedButton.classList.add('active');
    }
}

function executeScripts(container) {
    const scripts = container.querySelectorAll("script");
    const promises = [];

    scripts.forEach(oldScript => {
        const src = oldScript.src;

        if (src && loadedScripts.has(src)) {
            oldScript.remove();
            return;
        }

        const newScript = document.createElement("script");


        if (oldScript.src) {
            newScript.src = src;
            loadedScripts.add(src);
            newScript.async = false;

            if (!oldScript.type && /export\s+|import\s+/.test(oldScript.textContent)) {
                newScript.type = "module";
            }

            console.log(newScript)

            // Creamos una promesa para cuando cargue
            const p = new Promise(resolve => {
                newScript.onload = resolve;
                newScript.onerror = resolve; // seguir aunque falle
            });
            promises.push(p);
        } else {
            // Inline script: se ejecuta inmediatamente al insertarlo
            newScript.textContent = oldScript.textContent;
        }

        for (const attr of oldScript.attributes) {
            newScript.setAttribute(attr.name, attr.value);
        }

        oldScript.replaceWith(newScript);
    });

    // Esperar a que todos los scripts externos se carguen antes de continuar
    return Promise.all(promises);
}
