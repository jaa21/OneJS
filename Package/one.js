export const canvas = document.getElementById("canvas");
export const context = canvas.getContext("2d");

export function DrawRectangle(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

export function DrawImage(image, x, y, width, height) {
    let img = new Image();
    img.src = image;
    img.onload = function() {
        context.drawImage(img, x, y, width, height);
    }
}   

export function SetCanvasColor(colorName) {
    if (colorName == "black") {
        context.fillStyle = "black";
    }
    else if (colorName == "blue") {
        context.fillStyle = "blue";
    }
    else if (colorName == "red") {
        context.fillStyle = "red";
    }
    context.fillRect(0, 0, canvas.width, canvas.height);
}