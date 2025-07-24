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

    private _courseCount = 1

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

const Bubai = new User("Bubai@g.com","kalu",123)