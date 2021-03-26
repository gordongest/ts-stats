// repeated code
const addOne = (a: number): number => {
  return a + 1;
};
const addTwo = (a: number): number => {
  return a + 2;
};
const addThree = (a: number): number => {
  return a + 3;
};

// reusable code
const add = (a: number, b: number): number => {
  return a + b;
};

// repeated classes
// class HoldNumber {
//   data: number;
// }

// const holdNumber = new HoldNumber(0);
// holdNumber.data = 123;

// class HoldString {
//   data: string;
// }

// const holdString = new HoldString('');
// holdString.data = 'abc';

// generic
class HoldAnything<T> {
  // T = TypeOfData
  constructor(public data: T) {}

  add(a: T): T {
    return a;
  }
}

const holdBoolean = new HoldAnything<boolean>(true);
holdBoolean.data = false;

const holdString = new HoldAnything<string>('def');
holdString.data = 'abc';

const holdNumber = new HoldAnything<number>(0);
holdNumber.data = 123;
holdNumber.add(10);
