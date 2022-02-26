export class Shape{
    #color;

    constructor(color){
        if(this.constructor.name == "Shape")
            throw "this is an abstract class"
        this.#color=color;
    }

    set Color(color){
        this.#color=color;
    }
    get Color(){
        return this.#color;
    }

    drawShape(){
        console.log(`shape color is ${this.#color}`);
    }
}