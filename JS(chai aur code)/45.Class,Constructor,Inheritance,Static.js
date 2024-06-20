// simple class, it's constructor and it's function. And later object and it's implementation
class User{
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword(){
    return  `${this.password}abc`;
  }

  changeUsername(){
    return `${this.username.toUpperCase()}`
  }
}

const user1 = new User("sukhi","abc@.com", 1234);

console.log(user1.encryptPassword());
console.log(user1.changeUsername());
/* Output:- 1234abc, SUKHI */


// using function but the same functionality as above class
function User(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function(){
  return `${this.password}abc`;
}

User.prototype.changeUsername = function() {
  return `${this.username.toUpperCase()}`;
}

const user2 = new User("sukhi","abc@.com", 1234);

console.log(user2.encryptPassword());
console.log(user2.changeUsername());




// inheritance in JS
class User{
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`USERNAME is ${this.username}`);
  }
}


class Teacher extends User{
  constructor(username,email,password){
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai","chai@teacher.com","123");
const masalaChai = new User("masalachai")
chai.addCourse()
chai.logMe()


//static -> it's stop the access of the applied functiona or variable when applied
class User {
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`Username: ${this.username}`);
  }

  static createId(){
    return `123`
  }
}

const user3 = new User("user1");
console.log(user3.createId());

// so you can't inherit the createId anymore, as you have made it static