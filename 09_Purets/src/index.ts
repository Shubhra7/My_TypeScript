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

    protected _courseCount = 1  //same class and inherted class get this access

    readonly city: string = "Kolkata"
    // special type of consturtor without inital vairable for typescript
    constructor(
        public email:string, 
        public name: string,
        private userID: number
    ){
    }

    // private method
    private deleteToken(){
        console.log("Token deleted");
        
    }

    // getter
    get getAppleEmail(): string{
        return `apple {this.email}`
    }

    get courseCount() : number {
        return this._courseCount
    }

    // setter
    set courseCount(courseNum:number){
        if(courseNum <= 1){
            throw new Error("Course count less than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount=45
    }
}

const Bubai = new User("Bubai@g.com","kalu",123)


function addy(num1:number, num2:number, ...num3:number[] ):number {
    return num1 + num2 + num3.reduce((acc,curr)=>acc+curr,0)
}

const ans = addy(2,3,5,6,7,8)


// Genric

function getItems<Type>(items: Type[]): Type[]{
    // return new Array<Type>().concat(items);
    return [...items]
}

let concatResult = getItems<number>([1,2,3]);
let concatResults = getItems<string>(["1","2","3"]);

console.log(concatResult);
console.log(concatResults);


// Classes
class student{
    constructor(
        public name: string,
        public age: number,
    ){}
}

class captain extends student{
    constructor(
        public name:string,
        public age: number,
        public roll:number
    ){
        super(name,age)
    }
}

const jon = new student("Jhon",2)
const ram = new captain("Ram",3,3)

console.log(jon);
console.log(ram);


interface UserType{
    name: string;
    age: number;
    id: number;
    email: string;
}

let user: UserType = {name:"John",age: 2,id: 1,email: ""}

type UserType2{
    name: string;
    age: number;
}

let user2:UserType2 = {name: "Johhny",age:3}




