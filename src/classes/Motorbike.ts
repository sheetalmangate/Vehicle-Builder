// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  
  constructor(
    vin:string, 
    color:string, 
    make:string, 
    model:string, 
    year:number,
    weight:number,
    topSpeed:number,
    wheels:Wheel[]
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if(wheels.length === 2 ) {
      this.wheels = wheels;
    } else {
      this.wheels = [new Wheel(), new Wheel() ];
    }
  }
  // TODO: Implement the wheelie method
  wheelie() : void {

    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    
    console.log(`----------Printing Motorbike Details-----------`);
    super.printDetails();
    console.log(`VIN : ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    
    this.wheels.forEach((wheel,index) => {
      console.log(`Wheel ${index} inch with a ${wheel.getTireBrand}`);
    });
    super.printDetails();

  }
  
}

// Export the Motorbike class as the default export
export default Motorbike;
