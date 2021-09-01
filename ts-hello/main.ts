
function log(message) {
    console.log(message);
}


let a: number;      
let b: boolean;
let c: string;
let d: any;     //se non dichiarata o assegnata, sarà sempre any
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red, Green, Blue}; // {0, 1, 2}
let backgroundColor = Color.Red;


let message;
message = 'abc';
let endsWithC = <string>message.endsWith('c');
               // (message as string).endsWith('c');


let doLog = (endsWithC) => log(endsWithC);      //lambda expression


interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    //...
}

drawPoint({
    x: 1,
    y: 2
})

// a questo punto, è chiaro che conviene usare una vera e proprio classe -> vedi main2.ts