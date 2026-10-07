// Cuando tienes el CDN de jquery en el head, puede pasar que nuestro index.js intente accesarlo antes de que se terminen de descargar las librerías de jquery. Las siguientes líneas de código lo que hacen es que esperan a que se termine de descargar jquery, antes de ejecutar nuestro código de JS. Ésto también se puede resolver simplemente añadiendo el CDN en el body justo antes de nuestro script de JS. (Debe ser antes porque el HTML se lee de arriba hacia abajo). (Clase 151 de Angela).
// $(document).ready(function () {
//     $("h1").css("color", "red");
// });

//$("h1").css("color", "red");

console.log($("h1").css("color"));
console.log($("h1").css("font-size"));

$("h1").addClass("title margin"); // añade las clases title y margin al h1

$("h1").text("Holiwis"); // cambia el texto del h1 a Holiwis
//$("button").text("Don't press me!"); // modifica el texto del elemento

$("button").html("<em>Holis</em>"); // es el quivalente al innerHTML

$("a").attr("href", "https://www.google.com/?zx=1778618270451"); // modifica el atributo del elemento

$("h1").click(() => { //es un eventListener que reacciona a un click
    $("h1").css("color", "red");
});


// Manipular varios botones con eventListener
// Método vanilla
// for(let i = 0; i<document.querySelectorAll("button").length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", ()=> {
//         document.querySelector("h1").style.color = "red";
//     });
// }
//con jQuery (no hace falta usar un for, jQuery automáticamente añade la funcionalidad a cada botón)
// $("button").click(() => {
//     $("h1").css("color", "red");
// });

// $("button").click(() => {
//     $("h1").hide();
// });

// $("button").click(() => {
//     $("h1").toggle();
// });

// $("button").click(() => {
//     $("h1").fadeOut();
// });

// $("button").click(() => {
//     $("h1").fadeToggle();
// });

// $("button").click(() => {
//     $("h1").slideUp();
// });

// $("button").click(() => {
//     $("h1").slideDown();
// });

// $("button").click(() => {
//     $("h1").slideToggle();
// });

// $("button").click(() => {
//     $("h1").animate({opacity: 0.5});
// });

$("button").click(() => {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

// es un eventListener que reacciona a una tecla presionada
$("input").keypress((event) => {
    console.log(event.key);
});


$(document).keypress((event) => {
    $("h1").text(event.key);
});


$("h1").on("mouseover", () => {
    $("h1").css("color", "red");
});

// $("h1").before("<button>Like</button>");
// $("h1").after("<button>Like</button>");
// $("h1").prepend("<button>Like</button>");
// $("h1").append("<button>Like</button>");

//$("button").remove();

