import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SpyComponent} from './spy.component';
import {City} from '../../model/city/city.model';

describe('SpyComponent', () => {
  let component: SpyComponent;
  let fixture: ComponentFixture<SpyComponent>;

  beforeEach(async( () => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [SpyComponent]
    }).compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(SpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.cities = [
      new City(1, 'Venlo', 'LB'),
      new City(2, 'Groningen', 'GR'),
      new City(3, 'Amsterdam', 'NH')
    ];
  });

  it('should begein with a City array of length 3', () => {
    expect(component.cities.length).toEqual(3);
  });

  it('should add a city and increase the array length by 1', () => {
    component.addCity('Utrecht');
    expect(component.cities.length).toEqual(4);
  });

  it('should remove a city and decrease the array length by 1', () => {
    component.deleteCity({id: 4, name: 'Utrecht', province: 'unknown'});
    expect(component.cities.length).toEqual(3);
  });

  it('should call the deleteCity function on button click', function() {
    spyOn(component, 'deleteCity');
    const button = fixture.nativeElement.getElementsByClassName('btnDelete');
    button[0].click();
    expect(component.deleteCity).toHaveBeenCalled();
  });

});
