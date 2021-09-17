class CofeMake {
    on() {
        console.log('make coffee');
    }
    off() {
        console.log('does not make coffee');
    }
}

class Drip extends CofeMake {
    constructor(typeCoffe,typeFilter){
        this.typeCoffe = typeCoffe;
        this.typeFilter = typeFilter;
    }
    storageTank() {
        console.log(`I make ${this.typeCoffe} here`);
    }
    filterElement() {
        console.log(`add ${this.typeCoffe} here`);
    }
}

class Horn extends CofeMake {
    constructor(typeCoffe){
        this.typeCoffe = typeCoffe
    }
    coffeeHorn() {
        console.log(`add ${this.typeCoffe} here`);
    }
}

class CoffeeMachine extends CofeMake {
     
    constructor(typeCoffe){
        this.typeCoffe = typeCoffe
    }

    grindCoffe() {
        console.log(`I grind ${this.typeCoffe}`);
    }

    twoСups() {
        console.log("I'm making two cups");
    }

    temperatureSelection() {
        console.log('You choose the temperature of the coffee');
 }

}