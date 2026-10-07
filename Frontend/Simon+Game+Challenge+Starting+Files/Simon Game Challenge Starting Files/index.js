var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;

$(document).keypress(function () {
	if (level === 0) {
		$("body").removeClass("game-over");
		nextSequence();
	}
});

function nextSequence() {
	level++;
	$("h1").text("Level " + level);
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColors[randomNumber];
	gamePattern.push(randomChosenColour);
	buttonFlash(randomChosenColour);
	console.log("gamePattern: " + gamePattern);
}

function buttonFlash(buttonId) {
	$("#" + buttonId).fadeOut(90).fadeIn(90);
	let sound = new Audio("./sounds/" + buttonId + ".mp3");
	sound.play();
}

function animatePress(buttonId) {
	$("#" + buttonId).addClass("pressed");
	setTimeout(function () {
		$("#" + buttonId).removeClass("pressed");
	}, 100);
}

function wrongAnswer() {
	$("body").addClass("game-over");
	let sound = new Audio("./sounds/wrong.mp3")
	sound.play();
}

function checkAnswer(lastAnswer) {
	if (gamePattern[lastAnswer] !== userPattern[lastAnswer]) {
		$("h1").text("Game Over, Press Any Key to Restart");
		wrongAnswer();
		level = 0;
		gamePattern = [];
		userPattern = [];
		//break;
	}

	if (gamePattern.length === userPattern.length && level !== 0) {
		setTimeout(function () {
			userPattern = [];
			nextSequence();
		}, 1000);
	}
}

$(".btn").click(function () {
	let buttonPressed = this.id;
	console.log(buttonPressed);
	buttonFlash(this.id);
	animatePress(this.id);
	userPattern.push(buttonPressed); // se añade el color picado a la lista del usuario
	console.log("userPattern: " + userPattern);
	checkAnswer(userPattern.length - 1);
});

// $("#green").click(() => {
//     $("#green").fadeOut(90).fadeIn(90);
//     let sound = new Audio("./sounds/green.mp3");
//     sound.play();
// });

// $("#red").click(() => {
//     $("#red").fadeOut(90).fadeIn(90);
//     let sound = new Audio("./sounds/red.mp3");
//     sound.play();
// });

// $("#yellow").click(() => {
//     $("#yellow").fadeOut(90).fadeIn(90);
//     let sound = new Audio("./sounds/yellow.mp3");
//     sound.play();
// });

// $("#blue").click(() => {
//     $("#blue").fadeOut(90).fadeIn(90);
//     let sound = new Audio("./sounds/blue.mp3")
//     sound.play();
// });
