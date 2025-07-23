"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var Bubai = { name: "hitesh", id: 334 };
Bubai = { username: "Shubhra", id: 334 };
// seen: 3 (common function only allowed to do)
function getDbId(id) {
    // id.toLowerCase()  //***not allowed beacuse only common things are allowed */
    console.log("The id is: ".concat(id));
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id = id + 2;
    }
}
getDbId(3);
getDbId("3");
// seen:4 (array)
var data = [1, 2, 3, 4];
// const data2 : string[] | number[] = [1,2,"3"]  // not allowed
// either all number or all string
var data2 = [1, 2, 3];
var data3 = [1, 2, 3];
// seen: 5 (only allowed type making)
var seatAllotment;
seatAllotment = "aisle";
