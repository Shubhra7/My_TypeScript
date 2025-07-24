"use strict";
const score = [];
const names = [];
// seen: 1
function indentityOne(val) {
    return val;
}
// seen:2 
function indentityTwo(val) {
    return val;
}
// seen:3 (Using Generics)
// Version: 1
function indentityThree(val) {
    return val;
}
// Version: 2
function indentityFour(val) {
    return val;
}
indentityThree("3");
indentityFour(44);
indentityFour({ brand: "Milton", type: 12 });
