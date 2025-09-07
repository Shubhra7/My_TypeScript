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

function getItems<Type>(item: Type[]): Type[]{
    return new Array<Type>().concat(item);
}

let concatResult = getItems<number>([1,2,3]);

console.log(concatResult);



