import {CarService} from './car.service';

describe('CarService', () => {
  let carService: any;
  beforeEach(() => {
    carService = new CarService();
  });

  it('should return a new car object', () => {
    const newCar = carService.createCar('Honda', 'Civic', 2018, 4);
    expect(newCar).toEqual(jasmine.objectContaining({make: 'Honda', model: 'Civic', year: 2018, numWheels: 4 }));
  });

  it('should return string "A Honda Civic from 2018 is a fine car!"', () => {
    const newCar = carService.createCar('Honda', 'Civic', 2018, 4);
    expect(carService.getCar(newCar)).toEqual('A Honda Civic from 2018 is a fine car!');
  });

});
