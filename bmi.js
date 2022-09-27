//create class BMI
class BMI {
    //constructor used to initialise data in class
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    //method to calculate BMI
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}

//create an object from the class BMI 
let b1 = new BMI(1.83,94);

//calculate BMI and print into screen
console.log(b1.calculateBMI());


