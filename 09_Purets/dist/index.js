"use strict";
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
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this.city = "Kolkata";
    }
}
const Bubai = new User("Bubai@g.com", "kalu", 123);
