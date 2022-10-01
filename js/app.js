addEventListener("keypress", playOnKeyPress);

const pads = document.querySelectorAll(".pad")

for(let i = 0; i < pads.length; i++) {
    pads[i].addEventListener("transitionend", removePlaying) //cuando el html o js detecte que una transicion se ejecuto lo finalice.
    pads[i].addEventListener("click", playSoundClick) // aqui aprovecho a llamar a la 
    //funcion para hacerlo en la linea 31 aprovechando 
    //el for para recorrer todo el elemento
}

function removePlaying(e) {
    const elementClasses = e.target.classList;
    if(elementClasses.contains("playing")) {
        elementClasses.remove("playing") //con remove elimino una clase
    }
}

function playOnKeyPress(e) {
    // se guarda en una variable la tecla presionada
    const keyPressed = e.key.toUpperCase(); // me da que tecla estoy presionando
    // se guarda en una variable el elemento presionado
    const elementPressed = document.querySelector(`.${keyPressed}`)
    // se determina el nombre del audio
    const soundName = elementPressed.lastElementChild.textContent.toLowerCase(); //para navegar por el DOM obteniendo el ultimo elemento del hijo
    console.log(soundName)
    const soundToPlay = document.querySelector(`[src="./assets/sounds/${soundName}.wav"]`)

    elementPressed.classList.add("playing"); //agrega una clase
    soundToPlay.play();
}

function playSoundClick(e) {
    const elementClicked = e.target;
    //se hacen todas estas condiciones porque teniamos un problemas de click
    //cuando presionaba no te daban todos los elementos ya que si le clickeabas
    //a un texto te devolvia el texto, si le dabas click al titulo te devolvia solo el titulo
    //si le dabas click al contenedor te devolvia el contenedor, 
    //entonces pusimos todas estas condiciones para que en esos casos funcione igual
    if(elementClicked.tagName === "SPAN" || elementClicked.tagName === "KBD") {
        elementClicked.parentElement.classList.add("playing");
        const soundName = elementClicked.parentElement.lastElementChild.textContent.toLowerCase();
        const soundToPlay = document.querySelector(`[src="./assets/sounds/${soundName}.wav"]`)
        soundToPlay.play();
    }

    if(elementClicked.tagName === "DIV") {
        elementClicked.classList.add("playing")
        const soundName = elementClicked.lastElementChild.textContent.toLowerCase();
        const soundToPlay = document.querySelector(`[src="./assets/sounds/${soundName}.wav"]`)
        soundToPlay.play();
    }
}