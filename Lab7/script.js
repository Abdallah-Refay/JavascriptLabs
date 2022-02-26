import {Rectangle,Square} from "./rectangleModule.js";
import Circle from "./circleModule.js"

let shapes= [
            new Rectangle(4,2,"red"),
            new Square(3,"blue"),
            new Circle(2,3,"black")
            ]

shapes.forEach(sh=>sh.printArea());
