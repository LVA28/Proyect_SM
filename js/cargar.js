function loadContent(target, clickedButton) {
    const main = document.getElementById('main-content');
    const navButtons = document.querySelectorAll('#sidebar-nav a[data-target]');
    main.innerHTML = '<p class="text-center text-muted p-5">Cargando...</p>';
    fetch(target)
        .then(r => r.text())
        .then(html => main.innerHTML = html)
        .catch(() => main.innerHTML = '<div class="alert alert-danger">Error cargando contenido</div>');

    navButtons.forEach(btn => btn.classList.remove('active'));
    if (clickedButton) clickedButton.classList.add('active');
}