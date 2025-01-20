//Theory
/**
 * Oop:Oop is a programming paradigm to write code
 * javscript is use classes but intrenally it works on prototypr(es6 2015):
class:Collection of objects:
object:it is a real world entity:
 Why We Use OOp:
 make our code easier and shorter

 

 Classes:
 Instances():
 4pillors Of oops:
 
 
 */
// ObjectLiteral:
 //--Collection of properties and methods
 
const user={
    username:"sonu",//properties
    logincount:8,
    signedIn:true,getUser:function(){//methods
        console.log("Method of user!");
        console.log(`username:${this.username}`);// if  we retrieve here without using this is shows an error username not defined becuse username not defined inside the function:
    console.log(this);//here this means current context means if my object nam eis user it is user cintext means all the properties and methods of the user object.
    }
}

console.log(`Username ${user.username}`);//retrieve properties
console.log(user.getUser());// retrieve Methods
console.log(user.logincount);

//Constructor Function:
function User(username,logincount,signedIn){
    this.username=username;
    this.logincount=logincount;
    this.signedIn=signedIn;
    this.greet=function(){
        console.log(`Hii ${this.username}`);
    }
    return this;

}
const userOne=new User("Sambit",12 ,true);//if we dont use new keyword then there is a lot of problem all the objects replecem by  the new object
console.log(userOne);
console.log(userOne.greet());//it rertrun the instnace
const userTwo=new User("Sonu",90,false);// when we use new keyword there a new empty instace will be make in the heap memory
console.log(userTwo);
console.log(userTwo.greet())
//Code
//Uses Class:
// Define a class
// Define a class
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Method
    start() {
      console.log(`${this.make} ${this.model} is starting...`);
    }
  
    // Method
    stop() {
      console.log(`${this.make} ${this.model} is stopping...`);
    }
  }
  
  // Create an object (instance of the class)
  const myCar = new Car("Toyota", "Corolla", 2020);
  const myCar2=new Car("Suzuki","v1",2019);
  
  
  myCar.start(); // Output: Toyota Corolla is starting...
  myCar.stop();  // Output: Toyota Corolla is stopping...
  myCar2.start(); 
  myCar2.stop();  
// Abstarction:
class Employee {
    constructor(name, salary) {
      if (this.constructor === Employee) {
        throw new Error("Abstract class cannot be instantiated.");
      }
      this.name = name;
      this.salary = salary;
    }
  
    calculateBonus() {
      throw new Error("Method 'calculateBonus()' must be implemented.");
    }
  }
  
  class Manager extends Employee {
    calculateBonus() {
      return this.salary * 0.1;//1 % of bonus
      
    }
  }
  
  class Developer extends Employee {
    calculateBonus() {
      return this.salary * 0.2; //2% of nbonous 
    }
  }
  
  // const emp = new Employee("John", 50000); // Error: Abstract class cannot be instantiated.
  const manager = new Manager("Alice", 80000);
  console.log(manager.calculateBonus()); // Output: 8000
  console.log(manager);
  
  const developer = new Developer("Bob", 60000);
  console.log(developer.calculateBonus()); // Output: 12000
  console.log(developer);
// Encapsulation:
class BankAccount {
    #balance; // Private field
  
    constructor(accountHolder, initialBalance) {
      this.accountHolder = accountHolder;
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}. Remaining balance: $${this.#balance}`);
      } else {
        console.log("Invalid withdraw amount.");
      }
    }
  
    getBalance() {
      console.log(`Current balance: $${this.#balance}`);
      return this.#balance;
    }
  }
  
  const myAccount = new BankAccount("John Doe", 1000);
  myAccount.deposit(500);    // Deposited: $500. New balance: $1500
  myAccount.withdraw(300);   // Withdrew: $300. Remaining balance: $1200
  myAccount.getBalance();    // Current balance: $1200
  
// Inheritance:
// Base class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Derived class
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the parent class constructor
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const myDog = new Dog("Buddy", "Golden Retriever");
  console.log(myDog);
  myDog.speak()
   // Output: Buddy barks.
  
// PolyMorphosim:
class Shape {
    area() {
      return "Area not defined for generic shape.";
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  const shapes = [
    new Circle(5),
    new Rectangle(10, 20),
    new Shape(),
  ];
  
  shapes.forEach((shape) => {
    console.log(shape.area());
  });
  // Output:
  // 78.53981633974483 (Circle area)
  // 200 (Rectangle area)
  // Area not defined for generic shape.
  
