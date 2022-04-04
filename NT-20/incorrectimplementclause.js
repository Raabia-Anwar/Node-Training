//Example "Incorrect interface implementation ‘A’ --> 'C'".
//Implementating A to B
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.display = function () {
        console.log("B");
    };
    return B;
}());
var C = /** @class */ (function () {
    function C() {
    }
    //  Throws error: Property 'display' is missing in type 'C' but required in type 'A'.
    C.prototype.Display = function () {
        console.log("C");
    };
    return C;
}());
var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    Sonar.prototype.ping = function () {
        console.log("ping!");
    };
    return Sonar;
}());
var Ball = /** @class */ (function () {
    function Ball() {
    }
    // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'. //
    Ball.prototype.pong = function () {
        console.log("pong!");
    };
    return Ball;
}());
