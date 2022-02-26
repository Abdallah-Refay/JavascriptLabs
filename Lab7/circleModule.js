import {Shape} from "./rectangleModule.js";

export default class Circle extends Shape{
    #x;
    #y;

    constructor(x,y,color){
        super(color);
        this.#x=x;
        this.#y=y;
    }

 //#region getter & setters   
    get X(){
        return this.#x;
    }

    set X(value){
        this.#x=value;
    }

    get Y(){
        return this.#y;
    }

    set Y(value){
        this.#y=value;
    }
//#endregion

printArea(){
    console.log(`circle area is ${this.#y*this.#x}`);
}

drawShape(){
    console.log(`circle color is ${this.Color}`);
}



}
