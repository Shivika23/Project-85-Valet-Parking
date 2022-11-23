var canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

greencar_width = 75
greencar_height = 100

background_image = "parking.png";
greencar_image = "car2.png";

greencar_x = 5
greencar_y = 225

function add() {
	background_imgtag = new Image()
	background_imgtag.onload = uploadBackground
	background_imgtag.src = background_image

	greencar_imgTag = new Image()
	greencar_imgTag.onload = uploadgreencar
	greencar_imgTag.src = greencar_image
}

function uploadBackground() {
	ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height)


}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height)

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	key_Pressed = e.keyCode;
	console.log(key_Pressed);
	if (key_Pressed == '38') {
		up();
		console.log("up");
	}

	if (key_Pressed == '40') {
		down();
		console.log("down");
	}

	if (key_Pressed == '37') {
		left();
		console.log("left");
	}

	if (key_Pressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (greencar_y >= 0) {
        greencar_y = greencar_y - 10
        uploadBackground()
        uploadgreencar()
        console.log("up")
    }
}

function down() {
	if (greencar_y <= 500) {
        greencar_y = greencar_y + 10
        uploadBackground()
        uploadgreencar()
        console.log("down")
    }
}

function left() {
	if (greencar_x >= 0) {
        greencar_x = greencar_x - 10
        uploadBackground()
        uploadgreencar()
        console.log("left")
    }
}

function right() {
	if (greencar_x <= 700) {
        greencar_x = greencar_x + 10
        uploadBackground()
        uploadgreencar()
        console.log("right")
    }
}