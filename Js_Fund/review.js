function personConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
      console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
  }
}
// the 'new' keyword causes our constructor to return the object we expected.
var anika = new personConstructor('Anika', 33);
anika.greet();
console.log(anika);