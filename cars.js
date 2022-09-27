//create a parent class called vehicle
//the constructor should take 3 arguments 
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //crete a method to display the information of vehicles
    Information() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);

    }
}

//instanceate an object to display the information 
let v1 = new Vehicle("Ford", "Focus", "2013");
v1.Information();

// Add a new class called Cars that inherits from the Vehicle class.
//The constructor should invoke the parents class constructor 
//and pass it three argument s for make model and year.
//to do it I will extend the class Vehicle and use SUPER to call its constructor
class Cars extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    //The car class should contain a method called info Information.
    info(){
        console.log("\n**********this is the child class*************");
        this.Information();
        console.log(`Doors: ${this.doors}`);
        
    }

}

//instanceate an object to display the information 
let v2 = new Cars("Nissan","Qashqai", "2014", "5");
v2.info();