// 1. Selección de elementos
const music = document.getElementById('birthday-music');
let musicStarted = false;

// 2. Función optimizada para manejar la música
function playMusic() {
    // Si la música existe y aún no se ha marcado como iniciada
    if (music && !musicStarted) {
        music.play().then(() => {
            musicStarted = true;
            console.log("Música iniciada con éxito");
        }).catch(error => {
            // Esto ocurre si el navegador bloquea el audio localmente
            console.log("Esperando interacción del usuario para sonar...", error);
        });
    }
}

// 3. Lógica de las páginas del libro
document.querySelectorAll('.page').forEach((page, index) => {
    // Usamos 3 porque tienes p1, p2 y p3 en tu CSS
    const totalPages = 3; 

    page.addEventListener('click', () => {
        
        // INTENTO DE ACTIVAR MÚSICA
        // Se ejecutará en cada clic hasta que el navegador lo permita
        playMusic();
        
        // LÓGICA DE GIRO DE PÁGINA
        if (page.classList.contains('flipped')) {
            // Al cerrar la hoja
            page.classList.remove('flipped');
            
            setTimeout(() => {
                // El zIndex vuelve a su estado original (3, 2 o 1)
                page.style.zIndex = totalPages - index;
            }, 600);
        } else {
            // Al abrir la hoja
            page.classList.add('flipped');
            
            setTimeout(() => {
                // Se va al fondo para dejar ver la hoja siguiente
                page.style.zIndex = index + 1;
            }, 600);
        }
    });
});

// 4. LÓGICA DE LA NIEVE
function createSnow() {
    const container = document.getElementById('snow-container');
    if (!container) return;

    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    flake.innerHTML = '❄';
    flake.style.left = Math.random() * 100 + 'vw';
    flake.style.opacity = Math.random();
    flake.style.fontSize = Math.random() * 10 + 10 + 'px';
    flake.style.animationDuration = Math.random() * 3 + 2 + 's';
    
    container.appendChild(flake);
    
    // Eliminar el copo para no sobrecargar el móvil
    setTimeout(() => {
        flake.remove();
    }, 5000);
}

// Crear copos continuamente
setInterval(createSnow, 150);