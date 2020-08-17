import {async, TestBed} from "@angular/core/testing";
import {Person} from "./person.model";


describe('Person', () => {
  let Claudia: Person
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Person],
      declarations: [],
    }).compileComponents()
  }))


  beforeEach( () => {
    Claudia = new Person('Claudia')
  })

  it('should call Person Claudia', function () {
    expect(Claudia.sayHello()).toContain('Claudia')
  });

  afterEach(() => {
    Claudia = null;
  })

})
