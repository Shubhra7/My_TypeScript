class User {
    email:string
    name: string
    readonly city: string= "Jaipu"
    constructor(email:string, name: string){
        this.email=email;
        this.name= name
    }
}

const Bubai = new User("Bubai","kalu")