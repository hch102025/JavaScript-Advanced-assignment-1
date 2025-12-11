//-------------------- VARIABLES --------------------------------

// Player
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

// X and Y positions
let yPos = 0;
let xPos = 0;

// Movement speed
let speed = 10;

//-------------------- EVENTLISTENERS ------------------------------

// Eventlistener that checks for user arrow key inputs and updates the player position accordingly based on input
document.addEventListener("keydown", (event) => {
	// Checks if any of the arrow keys are pressed, which includes the event.code (physical key press) from the switch statement underneath
	if (
		["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.code)
	) {
		// Stops the web browser from using the default scrolling behaviour
		event.preventDefault();
	}

	// Switches between the different keys depending on which is being pressed
	// NOTE: Y-axis goes down when using positive numbers and up when using negative numbers
	// NOTE: X axis goes right when using positive numbers and left when using negative numbers
	switch (event.code) {
		case "ArrowUp":
			// Subtracts the speed from the yPos, which will make the yPos go up in the y-axis
			yPos -= speed;
			break;

		case "ArrowDown":
			// Adds the speed from the yPos, which will make the yPos go down in the y-axis
			yPos += speed;
			break;

		case "ArrowLeft":
			// Subtracts the speed from the XPos, which will make the XPos go left in the x-axis
			xPos -= speed;
			break;

		case "ArrowRight":
			// adds the speed from the XPos, which will make the XPos go right in the x-axis
			xPos += speed;
			break;
	}

	// Updates the player position using css styling
	player1.style.top = `${yPos}px`;
	player1.style.left = `${xPos}px`;
});

// Eventlistener that checks for the users mouse coordinates and moves the player according to where they click
document.addEventListener("click", (event) => {
	// Provides the coordinates of the mouse position when an event ("click") occurs
	let xMousePos = event.clientX;
	let yMousePos = event.clientY;

	// Updates the player position using css styling
	// Subtracts 50 px (Half of player size) to center the player where the mouse is clicked
	player2.style.top = `${yMousePos - 50}px`;
	player2.style.left = `${xMousePos - 50}px`;
});
