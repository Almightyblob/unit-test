import {TestBed,async} from "@angular/core/testing";
import {CityComponent} from "./city.component";

describe('CityComponent', () => {
  beforeEach(async( () => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [CityComponent]
    }).compileComponents()
  }))


it('should create component', () => {
  let fixture = TestBed.createComponent(CityComponent);
  let component = fixture.componentInstance
  expect(component).toBeTruthy()
})

it('should set city variable to "Haarlem"', () => {
  let fixture = TestBed.createComponent(CityComponent);
  let component = fixture.componentInstance
  fixture.detectChanges()
  expect(component.city).toEqual('Haarlem')
})

it('should change city variable to "Utrecht"', () => {
  let fixture = TestBed.createComponent(CityComponent);
  let component = fixture.componentInstance
  fixture.detectChanges()
  component.city = 'Utrecht'
  expect(component.city).toEqual('Utrecht')
})

it ('should render city name on page', () => {
  let fixture = TestBed.createComponent(CityComponent);
  fixture.detectChanges();
  expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Haarlem');
})

})
