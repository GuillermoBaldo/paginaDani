let indice = 0;

function moverCarrusel(direccion) {
    const carrusel = document.querySelector('.carrusel');
    const productos = document.querySelectorAll('.producto');
    const cantidadVisible = 3; // Cantidad de productos visibles a la vez

    indice += direccion;

    if (indice < 0) {
        indice = productos.length - cantidadVisible;
    }

    if (indice >= productos.length - cantidadVisible + 1) {
        indice = 0;
    }

    carrusel.style.transform = `translateX(${-indice * (productos[0].offsetWidth + 16)}px)`;
}
