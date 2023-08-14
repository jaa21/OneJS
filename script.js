import * as one from "./Package/one.js";

one.SetCanvasColor("red");
one.DrawRectangle(100, 400, 100, 100, "white");
one.DrawRectangle(one.canvas.width / 2 - 100, one.canvas.height / 2 - 100, 200, 200, "blue");
one.DrawImage("./player.png", 100, 100, 200, 200);
one.DrawRectangle(100, 312, 2, 2, "red");