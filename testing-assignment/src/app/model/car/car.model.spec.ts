import {async, TestBed} from "@angular/core/testing";
import {Car} from "./car.model";

describe( 'Car', ()=> {
  let newCar: Car;

  beforeEach(async( () => {
    TestBed.configureTestingModule({
      imports: [Car],
      declarations: []
    }).compileComponents()
  }))

  beforeEach(() => {
    newCar = new Car('Honda', 'Civic', 2018, 4)
  })

  afterEach(() => {
    newCar = null
  })

  it('should return the car description (Honda Civic, 2018, 4 wheels)', function () {
    expect(newCar.description()).toEqual('This is a Honda Civic from 2018 and it has 4 wheels')
  });

  it('should return the age of the car in years', function () {
    let year = 2018
    let age = 2
    expect(newCar.getAge(year)).toEqual(age)
  });

  // getWheels does not need to be tested since the result is already included in description()


} )
