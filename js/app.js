addEventListener("keypress", playSound);

function playSound(e) {
    const keyPressed = e.key.toUpperCase(); // me da que tecla estoy presionando
    const elementPressed = document.querySelector(`.${keyPressed}`)
    
    const soundName = elementPressed.lastElementChild.textContent.toLowerCase(); //para navegar por el DOM obteniendo el ultimo elemento del hijo
    const soundToPlay = document.querySelector(`[src="./assets/sounds/${soundName}.wav"]`)
    console.log(`src="./assets/sounds/${soundName}.wav"`);
    soundToPlay.play();
}