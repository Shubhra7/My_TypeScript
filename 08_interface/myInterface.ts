interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail : () => string // as Interface can implement late
    startTrail(): string
    getCoupon(couponname: string):number
}

const hitesh: User = { dbId: 22, email: "h@h.com", userId: 2211,
    startTrail: ()=>{
        return "trail Started"
    },
    getCoupon : (name:"35")=>{
        return 4
    }
}

console.log(hitesh);


export {}