var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3]);
// console.log(l1);
// const l2 = last(["a", "b", "c"]);
var lastT = function (arr) { return arr[arr.length - 1]; };
var l3 = lastT([1, 2, 3]);
var l4 = lastT(["a", "b"]);
var l5 = lastT(['d', "e"]);
var makeArr = function (x) { return [x]; };
var m = makeArr(1);
var makeArrT = function (x) { return [x]; };
var m3 = makeArrT('b');
var makeArrXY = function (x, y) { return [x, y]; };
var m4 = makeArrXY(5, 6);
var m5 = makeArrXY('a', 'b');
var m6 = makeArrXY('a', 3);
var makeTuple = function (x, y) { return [x, y]; };
var m7 = makeTuple('x', 6);
var m8 = makeTuple('x', 'y');
var m9 = makeTuple(5, 'y');
