// const { describe } = require('yargs');
const { createUser, filterAdults, getUserNames } = require('../src/user.js');
const user1 = createUser('Max', 20);
const user2 = createUser('Bob', 17);
const user3 = createUser('Marta', 15);
const user4 = createUser('Monica', 25);
const users1 = [user1, user2, user3, user4];
const users2 = [user2, user3];
describe('test user funtions', () => {
  beforeEach(() => {
    console.log('start test');
  });

  test('creating a new user', () => {
    expect(() => createUser(undefined, 20)).toThrow(Error);
  });
  test('if user an adult', () => {
    const user = createUser('testName', 20);
    expect(user.isAdult).toBeTruthy();
  });
  test('if user an adolescent', () => {
    const user = createUser('testName', 17);
    expect(user.isAdult).toBeFalsy();
  });
  //   ------------ Age filter ---------------
  test('return adult users', () => {
    const filteredUsers = filterAdults(users1);
    expect(filteredUsers).toEqual([
      {
        name: 'Max',
        age: 20,
        isAdult: true,
      },
      { name: 'Monica', age: 25, isAdult: true },
    ]);
  });
  test("returning an empty array if there isn't any adult user", () => {
    const filteredUsers = filterAdults(users2);
    expect(filteredUsers).toEqual([]);
  });
  //   -------------------- get user name ---------------
  test('getting username by toContain', () => {
    const name = 'Bob';
    const names = getUserNames(users1);
    expect(names).toContain(name);
  });
  test('working with an empty array', () => {
    const array = [];
    const names = getUserNames(array);
    expect(names).toEqual([]);
  });
});
