var Car = /** @class */ (function () {
    // ────────────────────────────────────────────────────────────────────────────────
    function Car(name) {
        if (name === void 0) { name = ""; }
        this.name = name;
    }
    //
    // ─── SET NAME VALUE ─────────────────────────────────────────────────────────────
    //
    Car.prototype.setCarName = function (carName) {
        this.name = carName;
    };
    //
    // ─── USE FUNCTION FOR RETURN VALUE IN PRIVATE CLAASS ────────────────────────────
    //
    Car.prototype.getName = function () {
        return this.name;
    };
    return Car;
}());
var newCar = new Car();
newCar.setCarName("Ducati");
console.log(newCar.getName());
