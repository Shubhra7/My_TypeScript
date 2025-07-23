let score: number | string = 33

score = 44
score = "55"


// seen: 2

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let Bubai: User | Admin = {name: "hitesh", id: 334}

Bubai = {username: "Shubhra", id: 334}


// seen: 3 (common function only allowed to do)

function getDbId(id: number | string){
    // id.toLowerCase()  //***not allowed beacuse only common things are allowed */
    console.log(`The id is: ${id}`);
    if(typeof id === "string"){
        id.toLowerCase()
    }else{
        id = id+2;
    }
    
}

getDbId(3)
getDbId("3")


// seen:4 (array)

const data : number[] = [1,2,3,4]
// const data2 : string[] | number[] = [1,2,"3"]  // not allowed
// either all number or all string
const data2 : string[] | number[] = [1,2,3]
const data3 : (string | number)[] = [1,2,3]


// seen: 5 (only allowed type making)
let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" // not allowed

export {}