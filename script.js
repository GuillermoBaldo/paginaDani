// Mostrar pestañas con fade in
function openBrand(evt, brandName) {
    var i, tabcontent, tablinks;

    // Ocultar todas las pestañas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Quitar clase "active" de todos los botones
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar la pestaña actual
    document.getElementById(brandName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Mostrar la primera pestaña por defecto
document.getElementById("Fiat").style.display = "block";

// Animación al hacer scroll
window.addEventListener('scroll', function() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Mostrar la primera pestaña por defecto
    document.getElementById("Fiat").style.display = "block";

    // Mostrar secciones al cargar
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.opacity = 1; // Muestra todas las secciones al cargar
        section.style.transform = "translateY(0)"; // Restablecer transformaciones
    });

    // Animación al hacer scroll
    window.addEventListener('scroll', function() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    });
});
