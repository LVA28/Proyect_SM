async function loadContent(container, path, tagExtract = "body") {
    try {
        const response = await fetch(path);
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const main = doc.querySelector(tagExtract);

        if (main) {
            container.innerHTML = main.innerHTML;

            await executeScripts(container);
        } else {
            container.innerHTML = "<p>No se encontró <main>.</p>";
            container.inert = true;
        }

    } catch (err) {
        console.error(`Could not find section: ${section}.html`, err);
    }
}

function executeScripts(container) {
    const scripts = container.querySelectorAll("script");
    const promises = [];

    scripts.forEach(oldScript => {
        const newScript = document.createElement("script");

        if (oldScript.src) {
            newScript.src = oldScript.src;
            newScript.async = false;

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