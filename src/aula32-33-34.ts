namespace Vehicle {
  //--> veiculo
  enum Colors {
    "Branco",
    "Prata",
    "Vermelho",
    "Preto",
    "Azul",
  }
  abstract class Car {
    name: string;
    engine: Engines.Engine;
    color: string;
    constructor(name: string, engine: Engines.Engine, color: Colors) {
      this.name = name;
      this.engine = engine
      this.color = Colors[color];
    }

    public start() {
      this.engine.connected = true;
    }

    public off() {
      this.engine.connected = false;
    }

    get myColor() {
      return this.color;
    }
    get myName() {
      return this.name;
    }
    get ImConnected() {
      return this.engine.startEngine ? "Sim" : "Não";
    }
    get myPower() {
      return this.engine.power;
    }
  }

  export class sportsCar extends Car {
    constructor(name: string, color: Colors) {
      super(name, new Engines.Engine(6, 300, new Engines.Turbo(100)), 2);
    }
  }

  export class economyCar extends Car {
    constructor(name: string, color: Colors) {
      super(name, new Engines.Engine(3, 100), 1);
    }
  }
}

namespace Engines {
  //--> motores
  export class Turbo {
    power: number;
    constructor(power: number) {
      this.power = power;
    }

    get enginePower() {
      return this.power;
    }
  }

  export class Engine {
    connected: boolean;
    cylinders: number;
    power: number;
    constructor(cylinders: number, power: number, turbo?: Turbo) {
      this.connected = false;
      this.cylinders = cylinders;
      this.power = power + (turbo ? turbo.enginePower : 0);
    }

    set startEngine(connected: boolean) {
      this.connected = connected;
    }

    get startEngine() {
      return this.connected;
    }

    get powerEngine() {
      return this.power;
    }
  }
}

const car1 = new Vehicle.sportsCar("Mustang", 3);
car1.start()

console.log(`Nome.....: ${car1.myName}`);
console.log(`Cor......: ${car1.myColor}`);
console.log(`Potencia.: ${car1.myPower}`);
console.log(`Ligado...: ${car1.ImConnected}`);

console.log("=========================");

const car2 = new Vehicle.economyCar("Voyage", 2);
car2.start()

console.log(`Nome.....:${car2.myName}`);
console.log(`Cor......:${car2.myColor}`);
console.log(`Potencia.:${car2.myPower}`);
console.log(`Ligado...:${car2.ImConnected}`);
