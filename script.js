document.addEventListener('DOMContentLoaded', () => {
    // Inicializar íconos de Lucide
    lucide.createIcons();

    // Efecto de sombra en el Navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Función para animaciones al hacer scroll (Reveal)
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100; // Cuántos píxeles antes de entrar a pantalla se activa

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    // Escuchar el evento de scroll
    window.addEventListener('scroll', reveal);
    
    // Ejecutar una vez al inicio por si elementos ya están en pantalla
    // Agregamos un pequeño delay para que la transición inicial se vea suave
    setTimeout(reveal, 100);
});
