const container = document.getElementById('floatingContainer');

// Pon aquí las frases románticas que quieras que salgan
const frases = [
    "Gracias por estar en mi vida ☀️",
    "Cada momento contigo es mágico ✨",
    "Juntos por siempre 🥰",
    "Tu sonrisa me ilumina 💖",
    "Siempre pienso en ti 💭",
    "Juntos para siempre",
    "Eres el amor de mi vida 💕",
    "Contigo todo es mejor 🌹",
    "Eres mi razón de sonreír 😊",
    "Cada día a tu lado es un regalo 🎁",
    "Eres mi sol en días nublados ☀️",
    "Te amo más de lo que las palabras pueden expresar 💌",
    "Eres mi sueño hecho realidad 🌙",
    "Gracias por ser tú, simplemente perfecto/a 💖",
    "Cada momento contigo es un tesoro 🏆",
    "Eres mi refugio en la tormenta 🌈",
    "Contigo, la vida es más dulce 🍫"
];

// Función para generar un número aleatorio entre un rango
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Crea una burbuja de texto flotante
function createFloatingText() {
    const textNode = document.createElement('div');
    textNode.classList.add('floating-text');
    
    // Elegir frase al azar
    textNode.innerText = frases[Math.floor(Math.random() * frases.length)];
    
    // Posición horizontal aleatoria (0% al 80% del ancho)
    textNode.style.left = `${getRandom(5, 75)}%`;
    
    // Velocidad y retraso aleatorio para que no salgan todas al mismo tiempo
    const duration = getRandom(6, 10);
    textNode.style.animationDuration = `${duration}s`;
    
    container.appendChild(textNode);
    
    // Eliminar el elemento después de que termine la animación para no saturar la memoria
    setTimeout(() => {
        textNode.remove();
    }, duration * 1000);
}

// Crea un corazón flotante
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    
    heart.style.left = `${getRandom(5, 90)}%`;
    
    const duration = getRandom(5, 8);
    heart.style.animationDuration = `${duration}s`;
    // Tamaños variados para los corazones
    heart.style.transform = `scale(${getRandom(0.5, 1.2)})`;
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Intervalos de tiempo para que aparezcan continuamente
setInterval(createFloatingText, 2500); // Cada 2.5 segundos una frase
setInterval(createHeart, 1500);        // Cada 1.5 segundos un corazón