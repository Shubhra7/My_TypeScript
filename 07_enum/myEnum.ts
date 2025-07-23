// enum used for key-pair value getting 
// Enums allow a developer to define a set of named constants. 

enum SeatChoice { 
    AISLE="aisle",
    MIDDLE=3,
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.AISLE

console.log(hcSeat);
const kalu = SeatChoice.WINDOW
console.log(kalu);


export {}
