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

// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
// --------------------------------------- task 1 -----------------------------------
