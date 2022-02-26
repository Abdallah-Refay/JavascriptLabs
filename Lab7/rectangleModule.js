import { Shape } from "./shapeModule.js";

class Rectangle extends Shape{
    #width;
    #height;
    constructor(width,height,color){
        super(color);
        this.#width=width;
        this.#height=height;
    }

    //#region getters & setters
    get Width(){
        return this.#width;
    }
    set Width(width){
        this.#width=width;
    }

    get Height(){
        return this.#height;
    }

    set Height(height){
        this.#height=height;
    }

    //#endregion

    printArea(){
        console.log(`rectangle area is ${this.#height*this.#width}`);
    }

    drawShape(){
        console.log(`rectangle color is ${this.Color}`);
    }
}

class Square extends Rectangle{

    constructor(length,color){
        super(length,length,color);
    }

    printArea(){
        console.log(`Square area is ${this.Height*this.Width}`);
    }

    drawShape(){
        console.log(`Square color is ${this.Color}`);
    }

}

export {Shape,Rectangle,Square};