const canvas = document.getElementById('canvasBurbujas');

function crearBurbuja() {
    const burbuja = document.createElement('div');
    burbuja.classList.add('burbuja');

    // Tamaño aleatorio tipo burbuja (entre 20px y 70px)
    const diametro = Math.random() * 50 + 20;
    burbuja.style.width = `${diametro}px`;
    burbuja.style.height = `${diametro}px`;

    // Posición horizontal aleatoria
    burbuja.style.left = Math.random() * 100 + "vw";

    // Duración de la animación (más grandes suben más rápido)
    const duracion = Math.random() * 4 + 4; // Entre 4 y 8 segundos
    burbuja.style.animationDuration = `${duracion}s`;

    // Un toque de difuminado opcional para profundidad de campo
    if (Math.random() > 0.5) {
        burbuja.style.filter = "blur(2px)";
    }

    canvas.appendChild(burbuja);

    // Limpieza de memoria
    setTimeout(() => {
        burbuja.remove();
    }, duracion * 1000);
}

// Genera burbujas seguido
setInterval(crearBurbuja, 150);

// EXTRA CANDELA: Si el usuario mueve el mouse o toca la pantalla, crea burbujas extra
window.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.8) { // No saturar tanto
        const burbujaPop = document.createElement('div');
        burbujaPop.classList.add('burbuja');
        burbujaPop.style.width = '25px';
        burbujaPop.style.height = '25px';
        burbujaPop.style.left = `${e.clientX}px`;
        burbujaPop.style.bottom = `${window.innerHeight - e.clientY}px`;
        burbujaPop.style.animationDuration = '3s';
        
        canvas.appendChild(burbujaPop);
        setTimeout(() => burbujaPop.remove(), 3000);
    }
});