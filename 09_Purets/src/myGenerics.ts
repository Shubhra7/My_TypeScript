const score : Array<number> = []
const names: Array<string> = []


// seen: 1
function indentityOne(val: boolean|number): boolean|number{
    return val
}

// seen:2 
function indentityTwo(val: any): any{
    return val
}

// seen:3 (Using Generics)

// Version: 1
function indentityThree<Type>(val: Type): Type{
    return val
}
// Version: 2
function indentityFour<T>(val: T): T{
    return val
}

indentityThree("3")
indentityFour(44)

interface Bootle{
    brand: string,
    type: number
}

indentityFour<Bootle>({brand:"Milton", type:12})



// second version start as generics with arrow functions


function getSearcProducts<T,>(products: T[]): T{
    // do some database operations
    const myIndex = 3
    return products[2]
}


// upper function arrow function technique

const getMoreSearchProducts = <T>(products: T[]): T=>{
    // do some database operations
    return products[0]
}




// advanced generics

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3,{
    connection: "Mongo",
    username: "Kalu",
    password: "123"
})


// ********* Generics classes ******

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}

