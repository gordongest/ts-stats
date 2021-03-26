"use strict";
// repeated code
const addOne = (a) => {
    return a + 1;
};
const addTwo = (a) => {
    return a + 2;
};
const addThree = (a) => {
    return a + 3;
};
// reusable code
const add = (a, b) => {
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
class HoldAnything {
    // T = TypeOfData
    constructor(data) {
        this.data = data;
    }
    add(a) {
        return a;
    }
}
const holdBoolean = new HoldAnything(true);
holdBoolean.data = false;
const holdString = new HoldAnything('def');
holdString.data = 'abc';
const holdNumber = new HoldAnything(0);
holdNumber.data = 123;
holdNumber.add(10);
