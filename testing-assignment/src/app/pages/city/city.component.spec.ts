import {TestBed, async, ComponentFixture} from "@angular/core/testing";
import {CityComponent} from "./city.component";
import {CarComponent} from "../car/car.component";

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  beforeEach(async( () => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [CityComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
  })


it('should create component', () => {
  expect(component).toBeTruthy()
})

it('should set city variable to "Haarlem"', () => {
  fixture.detectChanges()
  expect(component.city).toEqual('Haarlem')
})

it('should change city variable to "Utrecht"', () => {
  fixture.detectChanges()
  component.city = 'Utrecht'
  expect(component.city).toEqual('Utrecht')
})

it ('should render city name on page', () => {
  fixture.detectChanges();
  expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Haarlem');
})

})
