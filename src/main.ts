//  task 1
const userName: string = 'string';
const userAge: number = 5;
const isStudent: boolean = true;
const emptyValue: null = null;
const notAssigned: undefined = undefined;

// task 2
let something: string | number | boolean;
something = 2;
something = true;
something = 'string';

// task 3
function printValue(value: unknown): void {
  if (typeof value === 'string') {
    console.log(value.length);
    return;
  } else if (typeof value === 'number') {
    console.log(value * value);
    return;
  }
  console.log('Uknown type');
}

// task 4
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

const user: User = {
  id: 5,
  name: 'test',
  isActive: true,
};

// task 5
interface User {
  phone?: number;
}

const user2: User = {
  id: 30,
  name: 'test2',
  isActive: true,
};

// task 6
interface Product {
  title: string;
  price: number;
  tags: string[];
}

const products: Product[] = [
  { title: 'milk', price: 10, tags: ['diary', 'drinks'] },
  { title: 'bread', price: 2, tags: ['bakery product'] },
  { title: 'water', price: 0.5, tags: ['drinks'] },
];

// task 7

let test: number | string;
test = 1;
test = 'test';

// task 8

function formatId(value: string | number) {
  if (typeof value === 'string') {
    console.log('abc');
  } else if (typeof value === 'number') {
    console.log(123);
  }
}

// task 9 status
type Status = 'success' | 'error' | 'loading';

let currentStatus: Status = 'success';

// task 10
const numbers: number[] = [0, 2, 3, 4, 6, 7, 8, 9];
const strings: string[] = ['sfds', 'sdfsdf', 'sdf sd'];
const flags: boolean[] = [true, false, true];

// task 11
const users: User[] = [
  { id: 1, name: 'name1', isActive: true },
  { id: 2, name: 'name2', isActive: true },
  { id: 3, name: 'name3', isActive: false },
  { id: 4, name: 'name4', isActive: true },
];

// task 12

const unionArr: (string | number)[] = [
  324,
  'sdf',
  'afasd',
  222,
  2,
  2,
  2,
  'asdjof',
];

// task 13
function sum(value1: number, value2: number): number {
  return (value1 += value2);
}

//task 14
function greet(name: string): void {
  console.log(`Hello ${name}`);
}

// task 15

function totalPrice(price: number, discount: number): number {
  return price - (discount * price) / 100;
}

// task16
function handleResponse(status: Status, data: unknown): number | string {
  if (status === 'success' && typeof data === 'string') {
    return data.length;
  } else if (status === 'success' && typeof data === 'number') {
    return data * data;
  }
  return 'something went wrong';
}
