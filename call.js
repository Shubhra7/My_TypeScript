function setUsername(username){
    this.username=username
    console.log("called");
}

function createUser(username,email,password){
    setUsername.call(this,username) // this==> to pass the context
    this.email=email
    this.password=password
}

const che = new createUser("he","he@gmail.com","123")
console.log(che);
