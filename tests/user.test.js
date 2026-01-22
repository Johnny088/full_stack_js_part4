// const { describe } = require('yargs');
const { createUser, filterAdults, getUserNames } = require('../src/user.js');
let user1, user2, user3, user4;
let users1, users2;
describe('test user functions', () => {
  beforeEach(() => {
    user1 = createUser('Max', 20);
    user2 = createUser('Bob', 17);
    user3 = createUser('Marta', 15);
    user4 = createUser('Monica', 25);
    users1 = [user1, user2, user3, user4];
    users2 = [user2, user3];
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
