interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail : () => string // as Interface can implement late
    startTrail(): string
    getCoupon(couponname: string):number
}

// Reopening of interface
interface User {
    githubToken: string
}

// inheritance in interface
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const hitesh: User = { dbId: 22, email: "h@h.com", userId: 2211,
githubToken: "3345",
    startTrail: ()=>{
        return "trail Started"
    },
    getCoupon : (name:"35")=>{
        return 4
    }
}

console.log(hitesh);


export {}