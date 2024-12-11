// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle {
  
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[],
      towingCapacity: number,
    ) {

      super();
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
      if(wheels.length === 4 ) {
        this.wheels = wheels;
      } else {
        this.wheels = [ new Wheel(), new Wheel(), new Wheel(), new Wheel()];
      }
      this.towingCapacity = towingCapacity;

    }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car ): void {
    
    // TODO: Get the make an model of the vehicle if it exists
    let make = vehicle.make;
    let model = vehicle.model;

    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
   if( vehicle.weight <= this.towingCapacity ){
      // TODO: If it is, log that the vehicle is being towed
      console.log(` ${make} ${model} is towed by truck`);
    } else {
      // TODO: If it is not, log that the vehicle is too heavy to be towed
      console.log(` ${make} ${model} is too heavy to be towed`);
    }
  }

  override printDetails(): void {
    
    console.log(`------------Printing Truck Details------------`);
    console.log(`VIN : ${this.vin}`);
    console.log(`Make : ${this.make}`);
    console.log(`Model : ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    this.wheels.forEach((wheel,index) => {
      console.log(`Wheel ${index} inch with a ${wheel.getTireBrand}`);
    });
    super.printDetails();
  }

}

// Export the Truck class as the default export
export default Truck;
