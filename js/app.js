addEventListener("keypress", playSound);

function playSound(e) {
    const keyPressed = e.key.toUpperCase(); // me da que tecla estoy presionando
    const elementPressed = document.querySelector(`.${keyPressed}`)
    
    const soundName = elementPressed.lastElementChild.textContent.toLowerCase(); //para navegar por el DOM obteniendo el ultimo elemento del hijo
    console.log(soundName)
    const soundToPlay = document.querySelector(`[src="./assets/sounds/${soundName}.wav"]`)
    soundToPlay.play();
}

addEventListener("click", playSoundClick);

function playSoundClick(e) {
    const valueClick = e.target.lastElementChild.textContent.toLowerCase();//obtengo el nombre de la tecla
    const soundToPlay = document.querySelector(`[src="./assets/sounds/${valueClick}.wav"]`) //lo llamo desde el html
    soundToPlay.play(); //lo ejecuto
}