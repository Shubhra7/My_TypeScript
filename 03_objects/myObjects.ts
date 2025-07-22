const User = {
    name: "Bubai",
    email: "bubai@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}

createUser({name: "bubai", isPaid: false})

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price:339}
}

// exception
let newUser = {name: "hitesh", isPaid: false, email: "kalu@gmail.com"}

createUser(newUser) // extra element accepted by passing varaible 


// ***** Project doing stuffs
// creating data type first then do
// type Alias

/*
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUsers(user: User):User{
    return {name: "",email: "", isActive: true}
}

createUsers({name: "",email: "", isActive: true}) 
*/


// ReadOnly and Optional(?)
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails ?: number // ? = optional
}

let myUser: User ={
    _id: "123",
    name: "Bubai",
    email: "b@b.com",
    isActive: false
}

// myUser._id ="1233"  // not allowed as ready only 
myUser.name= "Kalu"

// mixing of Types

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: string
}



export{}