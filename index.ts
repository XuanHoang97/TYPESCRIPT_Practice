// GENERICS
type strArray = Array<string>;
type numArr = Array<number>;

const last = (arr: Array<number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3]);
// console.log(l1);
// const l2 = last(["a", "b", "c"]);

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3]);
const l4 = lastT(["a", "b"]);
const l5 = lastT<string>(['d', "e"]);

const makeArr = (x: number) => [x];

const m = makeArr(1);

const makeArrT = <T>(x: T) => [x];
const m3 = makeArrT('b');

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m4 = makeArrXY(5, 6);
const m5 = makeArrXY('a', 'b');
const m6 = makeArrXY('a', 3);

const makeTuple = <T, U>(x: T, y: U) => [x, y];
const m7 = makeTuple('x', 6);
const m8 = makeTuple('x', 'y');
const m9 = makeTuple(5, 'y');