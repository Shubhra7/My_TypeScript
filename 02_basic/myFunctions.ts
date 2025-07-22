function addTwo(num: number):string{
    // return num + 2
    return "Dadu Kalu"
}

console.log(addTwo(2))

function getUpper(val: string){
    return val.toUpperCase()
}

console.log(getUpper("Bubai"));



function signUpUser(name: string, email: string, isPaid: boolean){

}

signUpUser("Shubhra", "2", true)

// By default value giving technique
let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

loginUser("Kalu","kal@kk.com")


const heros = ["thor", "spiderman"]

heros.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void{
    console.log(errmsg);
    
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

export {}