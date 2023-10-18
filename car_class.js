class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep";
    }

    toString(){
        return `"This vehicle is a ${this.year} ${this.make} ${this.model}"`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!"
    }
}

class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(vehicleToPark){
        if (vehicleToPark instanceof Vehicle && this.vehicles.length < this.capacity){
            vehicles.push(vehicleToPark);
            return "Thanks for parking with us!"
        } else if (vehicleToPark instanceof Vehicle && this.vehicles.length >= this.capacity) {
            return "Sorry, we're full."
        } else if (!(vehicleToPark instanceof Vehicles)) {
            return "Only vehicles allowed in here!"
        }
    }
}
