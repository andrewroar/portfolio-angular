class ABC {
    //Make it optional. Private prevent it from changing
    constructor(private x?: number, private y?: number){

    }
    draw(){
        console.log("X: "+ this.x + "Y: "+ this.y);
    }
}

let Peter = new ABC(5,7)
Peter.draw()
