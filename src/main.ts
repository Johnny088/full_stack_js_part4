// --------------------------------------- task 1 -----------------------------------
enum DeliveryState {
  created = 'created',
  inTransit = 'on the way',
  delivered = 'delivered',
  canceled = 'canceled',
}
let OrderState: DeliveryState = DeliveryState.created;
console.log(OrderState);
OrderState = DeliveryState.inTransit;
console.log(OrderState);
OrderState = DeliveryState.delivered;
console.log(OrderState);
OrderState = DeliveryState.canceled;
console.log(OrderState);

// --------------------------------------- task 2 -----------------------------------
interface Order {
  id: number;
  title: string;
  price: number;
  state: DeliveryState;
}
let order: Order = {
  id: 1,
  title: 'item',
  price: 1500,
  state: DeliveryState.created,
};
console.log(order);
// --------------------------------------- task 3 -----------------------------------
function updateOrderState(order: Order, newState: DeliveryState): Order {
  return { ...order, state: newState };
}
const newOrder: DeliveryState = DeliveryState.inTransit;
order = updateOrderState(order, newOrder);
console.log(order);

// --------------------------------------- task 4 -----------------------------------
interface Box<T> {
  value: T;
  createdAt: Date;
}
// -----------------------------------
const numberBox: Box<number> = {
  value: 1,
  createdAt: new Date(),
};
console.log(numberBox);

// --------------------------------------
const stringBox: Box<string> = {
  value: 'there can be your ads',
  createdAt: new Date(),
};
console.log(stringBox);

// -------------------------------
const objectBox: Box<Order> = {
  value: {
    id: 2,
    title: 'item2',
    price: 1070,
    state: DeliveryState.created,
  },
  createdAt: new Date(),
};
console.log(objectBox);
// --------------------------------------- task 5 -----------------------------------

function wrapInArray<T>(item: T): T[] {
  return [item];
}
const numberArr = wrapInArray<number>(5);
console.log(numberArr);
const stringArr = wrapInArray<string>('something in an array');
console.log(stringArr);
// --------------------------------------- task 6 -----------------------------------
function getItemId<T extends { id: number }>(item: T): number {
  return item.id;
}
const id = getItemId(order);
console.log(id);
// --------------------------------------- task 7 -----------------------------------
function simulateRequest(): Promise<number> {
  const number: number = Math.floor(Math.random() * 100);
  return new Promise(resolve => {
    setTimeout(() => resolve(number), 1000);
  });
}
simulateRequest().then(result => console.log(result));

// --------------------------------------- task 8 -----------------------------------
async function loadStatistics(): Promise<number> {
  const number1: number = await simulateRequest();
  const number2: number = await simulateRequest();
  return number1 + number2;
}
loadStatistics().then(result => console.log(result));
// --------------------------------------- task 9 ------------------------------------
// --------------------------------------- task 11 -----------------------------------
interface Payable {
  pay(amount: number): void;
}
class Employee implements Payable {
  name: string;
  salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  getInfo(): string {
    return `name: ${this.name} Salary: ${this.salary}$`;
  }
  pay(amount: number): void {
    this.salary += amount;
  }
}
const worker1 = new Employee('Johnny', 4800);
const info: string = worker1.getInfo();
console.log(info);
// --------------------------------------- task 10 -----------------------------------
class Developer extends Employee {
  programingLanguage: string;
  constructor(name: string, salary: number, programingLanguage: string) {
    super(name, salary);
    this.programingLanguage = programingLanguage;
  }
  getInfo(): string {
    return `${super.getInfo()} Programming Language: ${this.programingLanguage}`;
  }
}
const worker2 = new Developer('Kane', 5000, 'JavaScript');
const info2: string = worker2.getInfo();
console.log(info2);
worker2.pay(1999);
console.log(worker2.getInfo());

// --------------------------------------- task 12 -----------------------------------
abstract class Transport {
  speed!: number;
  constructor(speed: number) {
    this.speed = speed;
  }
  abstract move(): void;
}
class Bicycle extends Transport {
  // constructor(speed: number) {
  //   super(speed);
  // }
  move(): void {
    console.log(`My bycicle goes ${this.speed}km/h`);
  }
}
const bicycle = new Bicycle(10);
bicycle.move();

class Car extends Transport {
  // constructor(speed: number) {
  //   super(speed);
  // }
  move(): void {
    console.log(`My car goes ${this.speed}km/h`);
  }
}
const car = new Car(100);
car.move();
// --------------------------------------- task 13 -----------------------------------
type ApiResult<T> = {
  data: T;
  success: boolean;
  timestamp: Date;
};

function geResult<T>(value: T): ApiResult<T> {
  return {
    data: value,
    success: true,
    timestamp: new Date(),
  };
}
console.log(geResult<Order>(order));
console.log(geResult<Developer>(worker2));
