"use strict";
// class User {
//     public email:string
//     name: string
//     private readonly city: string= "Jaipu"
//     constructor(email:string, name: string){
//         this.email=email;
//         this.name= name
//     }
// }
class User {
    // special type of consturtor without inital vairable for typescript
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this._courseCount = 1; //same class and inherted class get this access
        this.city = "Kolkata";
    }
    // private method
    deleteToken() {
        console.log("Token deleted");
    }
    // getter
    get getAppleEmail() {
        return `apple {this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setter
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count less than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 45;
    }
}
const Bubai = new User("Bubai@g.com", "kalu", 123);
function addy(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, curr) => acc + curr, 0);
}
const ans = addy(2, 3, 5, 6, 7, 8);
// Genric
function getItems(item) {
    return new Array().concat(item);
}
let concatResult = getItems([1, 2, 3]);
console.log(concatResult);
