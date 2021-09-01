
export class Point {       //concetto di Cohesion
    // private x: number;       
    // private y: number;       superfluo

    constructor(private _x?: number, private _y?: number) {  //x e y sono optional se accompagnati da ?
        // this.x = x;                                     //questo perchè TS non ha costruttori multipli
        // this.y = y;      superfluo
    }

    draw() {
        console.log('X: '+ this._x + ', Y: '+ this._y);
    }

    getDistance(another: Point) {
        //...
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0)
            throw new Error("Value cannot be less than 0");
        this._x = value;
    }
}