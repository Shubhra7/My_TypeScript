// main moto of narrowing is ==> come to know which type it is

// seen:1
function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val+3
}

//seen:2
function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}


//seen:3 (from typescriptlang documentation)
function printAll(strs: string | string[] | null){

    if(strs){
        if(typeof strs === "object"){
            for (const s of strs){
                console.log(s);
            }
        } else if (typeof strs === "string"){
            console.log(strs);
        }
    }
}



// seen:4 **** Very tricky ***  [in operator in narrow]

interface User {
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if ("isAdmin" in account) {  //important checking...tricky
        return account.isAdmin
    }
}


// seen: 5 (when primitive data type) [checking by instanceof ]

function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());        
    } else {
        console.log(x.toUpperCase());
        
    }
}


// seen: 6  (very tricky) [checking by type casting]
// https://youtu.be/30LWjhZzg50?t=16087

type Fish = {swim: ()=> void}
type Bird = {fly: ()=> void}

//checking isFish by doing typecasting and check have or not ***** then make return type casted
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}


function getFood(pet: Fish | Bird){
    if( isFish(pet)){
        pet
        return "fish food"
    }else{
        pet
        return "Bird food"
    }
}


// seen: 7  (checking by adding Kind parameter of type/interface)
interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    lenght: number,
    width: number
}

type Shape = Circle | Square

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
}

// very usable when multiple type have
function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side

        default:
            const _defaultforshape: never = shape //never to check unhandled type rather than "any"
            return _defaultforshape

    }
}