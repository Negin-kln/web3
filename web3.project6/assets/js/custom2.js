// ------------get & set
class Person {
  constructor(name, age, height) {
    this._name = name;
    this._age = age;
    this._height = height;
  }
  get name() {
    return this._name.toUpperCase();
  }
  get age() {
    return this._age;
  }
  get height() {
    return this._height;
  }
  set name(newName) {
    this._name = newName;
  }
  set age(newAge) {
    if (newAge > 0 && newAge <= 100) this._age = newAge;
    else this._age = newAge;
  }
  walk() {
    console.log(this._name + " is walking.");
  }
}
let person1 = new Person("negin", 25);
console.log(person1.name);
console.log(person1.age);
console.log(person1.walk());
// -----------------------
class Book {
  constructor(title, author, pages, price, discount) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.price = price;
    this.discount = discount;
  }
  get getReadingTime() {
    console.log(`readingTime= ${this.pages * 3}min`);
  }
  get applyDiscount() {
    console.log(`${this.discount}off`);
  }
  set getReadingTime(newPages) {
    this.pages = newPages;
  }
}
let book1 = new Book("oliver", "oliver", 350, 450000, "20%");
console.log(book1.getReadingTime);
console.log(book1.applyDiscount);
