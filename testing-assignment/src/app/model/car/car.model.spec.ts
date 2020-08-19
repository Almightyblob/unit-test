import {Car} from './car.model';

describe( 'Car', () => {
  let newCar: Car;

  beforeEach(() => {
    newCar = new Car('Honda', 'Civic', 2018, 4);
  });

  afterEach(() => {
    newCar = null;
  });

  it('should return the car description (Honda Civic, 2018, 4 wheels)', () => {
    expect(newCar.description()).toEqual('This is a Honda Civic from 2018 and it has 4 wheels');
  });

  it('should return the age of the car in years (2)', () => {
    const year = (new Date().getFullYear() - 2);
    const age = 2;
    expect(newCar.getAge(year)).toEqual(age);
  });

  // getWheels does not need to be tested individually since the result of numWheels is already included in description()


} );
