class Car {
  //
  // ─── SET PRIVATE ────────────────────────────────────────────────────────────────
  //
  private name: string;
  // ────────────────────────────────────────────────────────────────────────────────

  constructor(name: string = "") {
    this.name = name;
  }

  //
  // ─── SET NAME VALUE ─────────────────────────────────────────────────────────────
  //
  setCarName(carName: string): void {
    this.name = carName;
  }

  //
  // ─── USE FUNCTION FOR RETURN VALUE IN PRIVATE CLAASS ────────────────────────────
  //
  getName(): string {
    return this.name;
  }
  // ────────────────────────────────────────────────────────────────────────────────
}

let newCar = new Car();
newCar.setCarName("Ducati");

console.log(newCar.getName());
