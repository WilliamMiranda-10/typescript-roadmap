var Vehicle;
(function (Vehicle) {
    //--> veiculo
    let Colors;
    (function (Colors) {
        Colors[Colors["Branco"] = 0] = "Branco";
        Colors[Colors["Prata"] = 1] = "Prata";
        Colors[Colors["Vermelho"] = 2] = "Vermelho";
        Colors[Colors["Preto"] = 3] = "Preto";
        Colors[Colors["Azul"] = 4] = "Azul";
    })(Colors || (Colors = {}));
    class Car {
        name;
        engine;
        color;
        constructor(name, engine, color) {
            this.name = name;
            this.engine = engine;
            this.color = Colors[color];
        }
        start() {
            this.engine.connected = true;
        }
        off() {
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
    class sportsCar extends Car {
        constructor(name, color) {
            super(name, new Engines.Engine(6, 300, new Engines.Turbo(100)), 2);
        }
    }
    Vehicle.sportsCar = sportsCar;
    class economyCar extends Car {
        constructor(name, color) {
            super(name, new Engines.Engine(3, 100), 1);
        }
    }
    Vehicle.economyCar = economyCar;
})(Vehicle || (Vehicle = {}));
var Engines;
(function (Engines) {
    //--> motores
    class Turbo {
        power;
        constructor(power) {
            this.power = power;
        }
        get enginePower() {
            return this.power;
        }
    }
    Engines.Turbo = Turbo;
    class Engine {
        connected;
        cylinders;
        power;
        constructor(cylinders, power, turbo) {
            this.connected = false;
            this.cylinders = cylinders;
            this.power = power + (turbo ? turbo.enginePower : 0);
        }
        set startEngine(connected) {
            this.connected = connected;
        }
        get startEngine() {
            return this.connected;
        }
        get powerEngine() {
            return this.power;
        }
    }
    Engines.Engine = Engine;
})(Engines || (Engines = {}));
const car1 = new Vehicle.sportsCar("Mustang", 3);
car1.start();
console.log(`Nome.....: ${car1.myName}`);
console.log(`Cor......: ${car1.myColor}`);
console.log(`Potencia.: ${car1.myPower}`);
console.log(`Ligado...: ${car1.ImConnected}`);
console.log("=========================");
const car2 = new Vehicle.economyCar("Voyage", 2);
car2.start();
console.log(`Nome.....:${car2.myName}`);
console.log(`Cor......:${car2.myColor}`);
console.log(`Potencia.:${car2.myPower}`);
console.log(`Ligado...:${car2.ImConnected}`);
export {};
