var Greeter = /** @class */ (function () {
    function Greeter(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    Greeter.prototype.err = function () {
        this.name = "not ok";
        //Cannot assign to 'name' because it is a read-only property.
    };
    return Greeter;
}());
var g = new Greeter();
g.name = "also not ok";
//Cannot assign to 'name' because it is a read-only property
