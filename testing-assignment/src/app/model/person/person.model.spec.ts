import {async, TestBed} from '@angular/core/testing';
import {Person} from './person.model';

describe('Person', () => {
  let newPerson: Person;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Person],
      declarations: [],
    }).compileComponents();
  }));

  beforeEach( () => {
    newPerson = new Person('Claudia');
  });

  it('should call Person Claudia', () => {
    expect(newPerson.sayHello()).toContain('Claudia');
  });

  afterEach(() => {
    newPerson = null;
  });

});
