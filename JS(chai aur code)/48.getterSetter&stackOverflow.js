// An object property is either a data property or an access property, it can't be both. Two ways to define getter -> 
// Note -> it's use is if you don't wanna share the property with the user, or want to alter it completely the real value, for eg->  
//         


// get prop() { /* … */ } ,

const obj = {
  log: ['a', 'b', 'c'],

  get latest () {
    return this.log[this.log.length-2]
  },
};

console.log(obj.latest)

// get [expression]() { /* … */ }

const latestKey = 'latest';

const obj1 = {
  log: ['a', 'b', 'c'],
  get [latestKey]() {
    return this.log[this.log.length - 1];
  },
};

console.log(obj1.latest);
// Expected output: "c"




// Getter and Setter ( Chai aur Code)

// a property you don't want user to access, otherwise you want to modify it before access to the user, than we use getter and setter

class User{
  constructor(email, password){
    this.email = email;
    this.password = password;
  }

  get email(){
    return this._email.toUpperCase();
  }

  set email(value){
    this._email = value
  }

  get password () {
    return `${this._password}changedPasswordToTheUser`
  }

  set password (value) {
    this._password = value;
  }
}

const hitesh = new User('sukhman@gmail.com', '123')
console.log(hitesh.password)
console.log(hitesh.email)

// tbc, left the getter-setter methods with the help of the function (old syntax)