var names = ["Laura", "Shaun", "Jane"];
//
// names.forEach(function(name){
//   console.log('forEach: ', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log("Best person:",name));

// var returnMe = (name) => name + "!";
// console.log(returnMe('Laura'));

// var person = {
//   name: 'Phoofer',
//   greet: function() {
//     names.forEach( (name) =>{
//       console.log(this.name + " says hi to " + name)
//     });
//   }
// }
//
// person.greet();

//challenge area
function add(a,b){
  return a + b;
}

console.log(add(3,4));

//addStatement
var addStatement = (a, b) => {
  return a + b;
}

console.log(addStatement(7,4));

//addExpression
var addExpression = (a,b) => a + b;

console.log(addExpression(10,5));
