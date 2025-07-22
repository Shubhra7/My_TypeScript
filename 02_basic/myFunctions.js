"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num + 2
    return "Dadu Kalu";
}
console.log(addTwo(2));
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("Bubai"));
function signUpUser(name, email, isPaid) {
}
signUpUser("Shubhra", "2", true);
// By default value giving technique
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("Kalu", "kal@kk.com");
var heros = ["thor", "spiderman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
