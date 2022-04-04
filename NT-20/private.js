var A = /** @class */ (function () {
    function A() {
        this.x = 10;
    }
    A.prototype.sameAs = function (other) {
        // No error
        return other.x === this.x;
    };
    return A;
}());
