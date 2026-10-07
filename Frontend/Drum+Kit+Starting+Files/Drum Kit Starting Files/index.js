var arrayOfDrumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < arrayOfDrumButtons.length; i++) {
    arrayOfDrumButtons[i].addEventListener("click", function () {
        // arrayOfDrumButtons es un arreglo de objetos tipo button, si imprimimos console.log(arrayOfDrumButtons[i]); Nos regresará el objeto que fue clickeado. Ej:
        // <button class="w drum" style="color: white;">w</button>
        // Al usar la palabra reservada "this", hacemos referencia al objeto actual, es decir, en este caso, al objeto que llamó al eventListener (el botón clickeado).
        // console.log(this); también nos regresa el objeto (botón) que fue clickeado.
        // Por lo que console.log(arrayOfDrumButtons[i]); y console.log(this); hacen lo mismo, hacen refrencia al objeto (en este caso un botón) clickeado.

        //console.log(this); // this es el botón que activó el eventListener

        //this.style.color = "white"; // usando this también podemos cambiar otras propiedades del objeto clickeado.

        //console.log(event); // imprime el "click" del mouse: PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

        keySound(this.innerHTML); // manda el texto del botón como argumento

        buttonAnimation(this.innerHTML);
});
}


// En el caso de event listeners con teclado, no usamos un querySelector, ya que no hay algún elemento HTML que tengamos que buscar. En este caso lo que hacemos es añadir el listener a todo el documento (sin un querySelector en medio), para que toda la página escuche si presionamos una tecla.
document.addEventListener("keydown", function(event) { 
    //console.log(this); // Imprime el document
    //console.log(event); // Imprime la tecla presionada
    console.log(event.key); // imprime en la consola la tecla presionada
    //console.log(typeof(event.key)); // regresa el nobre de la tecla presionada  como un string
    keySound(event.key); // manda el nombre de la tecla presionada como argumento
    buttonAnimation(event.key);

});
// Para saber qué tecla fue presionada debemos pasarle el parámetro event (o como queramos llamarle) a la función. Siempre que nuestro event listener escuche algo, mandará el parámetro y nosotros tenemos la opción de recibirlo o no (si no ponemos nada entre los paréntesis, no vamos a recibir nada).
// En este caso tuvimos que usar el event en vez del this. Porque el this hace referencia al objeto que llama al método addEventListener(), no al detonante como tal (un click, una tecla presionada). En cambio, event sí hace referencia al evento (un click, una tecla presionada).
// Si imprimimos console.log(this); para el caso de la tecla presionada, lo que nos retorna es, en este caso, el documento (o sea el objeto que llama al método addEventListener()):
// Imprime: index.js:63 #document (http://127.0.0.1:5500/Drum+Kit+Starting+Files/Drum%20Kit%20Starting%20Files/index.html)<!DOCTYPE html><html lang=​"en" dir=​"ltr">​view-sourcescroll<head>​…​</head>​<body>​…​</body>​</html>

// Si imprimimos console.log(event); nos retorna la tecla presionada (entre otra info), el evento detonante: 
// Imprime: index.js:64 KeyboardEvent {isTrusted: true, key: 'r', code: 'KeyR', location: 0, ctrlKey: false, …}

// En pocas palabras. This -> hace referencia al objeto HTML (lo que está antes del .addEventListener).
// Event -> hace referencia al primer parámetro dentro de los paréntesis de addEventListener ("keydown", "click", etc).


function keySound(key) {
    switch (key) {
            case "w":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;

            case "a":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;
            
            case "s":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;

            case "d":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;

            case "j":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;

            case "k":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;

            case "l":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;

            default: console.log(this.innerHTML);
                break;
        }
}

function buttonAnimation(key) {

    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function() {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}