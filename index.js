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

// Callbacks: Callbacks are simply calling functions in another function to form a relationship

function one(call_two) {
  console.log("step 1 completed. Please call step 2");
  setTimeout(call_two, 3000);
  call_two();
}

function two() {
  console.log("step 2");
}

one(two);

let order = (call_production) => {
  console.log("Order placed. Please call production");
  console.log("Processing...");
  setTimeout(call_production, 3000);
};

let production = () => {
  console.log("Order received, starting production");
};

order(production);
