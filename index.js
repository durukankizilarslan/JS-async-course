// Synchronous

console.log("I ");

console.log("eat ");
console.log("ice cream ");
console.log("with a ");
console.log("spoon. ");

// Asynchronous

console.log("I ");
console.log("with a ");
console.log("spoon. ");
setTimeout(() => {
  console.log("ice cream ");
}, 3000);
console.log("eat ");
