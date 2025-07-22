"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Bubai",
    email: "bubai@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "bubai", isPaid: false });
function createCourse() {
    return { name: "reactjs", price: 339 };
}
// exception
var newUser = { name: "hitesh", isPaid: false, email: "kalu@gmail.com" };
createUser(newUser); // extra element accepted by passing varaible 
var myUser = {
    _id: "123",
    name: "Bubai",
    email: "b@b.com",
    isActive: false
};
// myUser._id ="1233"  // not allowed as ready only 
myUser.name = "Kalu";
