import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarComponent } from './car.component';

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an array of cars', () => {
    component.ngOnInit();
    expect(component.cars).toBeTruthy();
  });

  it('should create an array of cars of length 2', () => {
    expect(component.cars.length).toEqual(2);
  });

  it('should call the Output event when clicking a car in the list', () => {
    spyOn(component, 'selectCar');
    const carLink = fixture.nativeElement.querySelector('p');
    carLink.click();
    expect(component.selectCar).toHaveBeenCalled();
  });

});
