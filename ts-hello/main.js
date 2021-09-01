function log(message) {
    console.log(message);
}
var a;
var b;
var c;
var d; //se non dichiarata o assegnata, sarà sempre any
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; // {0, 1, 2}
var backgroundColor = Color.Red;
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
// (message as string).endsWith('c');
var doLog = function (endsWithC) { return log(endsWithC); }; //lambda expression
var drawPoint = function (point) {
    //...
};
drawPoint({
    x: 1,
    y: 2
});
// a questo punto, è chiaro che conviene usare una vera e proprio classe -> vedi main2.ts
