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
    readonly city: string = "Kolkata"
    constructor(
        public email:string, 
        public name: string,
        private userID: number
    ){
       
    }
}

const Bubai = new User("Bubai@g.com","kalu",123)