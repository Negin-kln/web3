// -------------------class1
class Customer {
  constructor(name, password, phone) {
    this.name = name;
    this.password = password;
    this.phone = phone;
  }
  submit() {
    console.log(
      `Wellcom ${this.name}.Your information was successfully registered.`
    );
  }
  Shopping() {
    console.log(`Purchase completed.`);
  }
}
// -------------------class2
class Teacher {
  constructor(name, lastName, personnelCode, fieldOfStudy) {
    this.name = name;
    this.lastName = lastName;
    this.personnelCode = personnelCode;
    this.fieldOfStudy = fieldOfStudy;
  }
  recordScore() {
    console.log(`Scores were recorded.`);
  }
}
// -------------------class3
class Student {
  constructor(name, lastName, idCode, grade) {
    this.name = name;
    this.lastName = lastName;
    this.idCode = idCode;
    this.grade = grade;
  }
  static grades(grade) {
    if (grade >= 0 && grade < 12)
      console.log(`student ${this.name} ${this.lastName} has passed.`);
    else if (grade >= 12 && grade <= 20)
      console.log(`student ${this.name} ${this.lastName} has passed.`);
    else console.log(`invalid.`);
  }
  static info(idCode) {
    if (idCode >= 0 || idCode <= 10)
      console.log(`${this.name} ${this.lastName} is a Computer student. `);
    else if (idCode > 10 || idCode <= 20)
      console.log(`${this.name} ${this.lastName} is a Mechanical student. `);
    else if (idCode > 20 || idCode <= 30)
      console.log(`${this.name} ${this.lastName} is a Architecture student. `);
    else if (idCode > 30 || idCode <= 40)
      console.log(`${this.name} ${this.lastName} is a Electrical student. `);
    else console.log(`${idCode} not found.`);
  }
}
let student1 = new Student("negin", "kalantari", 12, 20);
console.log(student1);
console.log(student1.grade);
// -------------------class4
class Horse {
  constructor(color, gender, breed, age) {
    this.color = color;
    this.gender = gender;
    this.breed = breed;
    this.age = age;
  }
  sit() {
    console.log(`${this.breed} horse sat down.`);
  }
  right() {
    console.log(`${this.breed} horse go right.`);
  }
  left() {
    console.log(`${this.breed} horse go left.`);
  }
}
// -------------------class5
class Volleyballplayer {
  constructor(name, number, height, Weight) {
    this.name = name;
    this.number = number;
    this.height = height;
    this.Weight = Weight;
  }
  Service() {
    console.log(`Player number ${this.number} hit a serve.`);
  }
  right() {
    console.log(`Player number ${this.number} go right.`);
  }
  left() {
    console.log(`Player number ${this.number} go left.`);
  }
}
// -------------------class6
class Chair {
  constructor(color, material, Weight, Coordinates) {
    this.color = color;
    this.material = material;
    this.Weight = Weight;
    this.Coordinates = Coordinates;
  }
  sold() {
    console.log(
      `This chair was sold with these coordinates ${this.Coordinates}.`
    );
  }
}
// -------------------class7
class Dog {
  constructor(name, age, breed, isCute) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.isCute = isCute;
  }
  speak() {
    console.log(`${this.name} is speak.`);
  }
  run() {
    console.log(`${this.name} is run.`);
  }
  increaseAge() {
    console.log(`${this.name} grew up.`);
  }
}
// -------------------class8
class Car {
  constructor(size, model, mark, color) {
    this.size = size;
    this.model = model;
    this.mark = mark;
    this.color = color;
  }
  service() {
    console.log(`${this.model} was serviced.`);
  }
  right() {
    console.log(`${this.model} go right.`);
  }
  left() {
    console.log(`${this.model} go left.`);
  }
}
// -------------------class9
class Person {
  constructor(name, gender, height, eyeColor, Weight, hairColor) {
    this.name = name;
    this.gender = gender;
    this.height = height;
    this.eyeColor = eyeColor;
    this.Weight = Weight;
    this.hairColor = hairColor;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
  work() {
    console.log(`${this.name} is working`);
  }
  play() {
    console.log(`${this.name} is playing`);
  }
}
// -------------------class10
class Book {
  constructor(title, author, pages, price, discount) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.price = price;
    this.discount = discount;
  }
  getReadingTime() {
    console.log(`readingTime= ${this.pages * 3}min`);
  }
  applyDiscount() {
    console.log(`${this.discount} off`);
  }
}
