
import { Point } from './point';

let point = new Point(1, 2);
let x = point.x;    //richiamo il get
point.x = 10;   //richiama il set

point.draw();
