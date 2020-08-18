import {Person} from './person.model';

describe('Person', () => {
  let newPerson: Person;

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
