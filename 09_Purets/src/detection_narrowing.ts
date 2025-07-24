// seen:1
function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val+3
}

//seen:2
function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}


//seen:3 (from typescriptlang documentation)
function printAll(strs: string | string[] | null){

    if(strs){
        if(typeof strs === "object"){
            for (const s of strs){
                console.log(s);
            }
        } else if (typeof strs === "string"){
            console.log(strs);
        }
    }
}



// seen:4 **** Very tricky ***  [in operator in narrow]

interface User {
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if ("isAdmin" in account) {  //important checking...tricky
        return account.isAdmin
    }
}