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

