// Synchronous

// console.log("I ");
// console.log("eat ");
// console.log("ice cream ");
// console.log("with a ");
// console.log("spoon. ");

//------------------------------------------------------

// Asynchronous

// console.log("I ");
// console.log("with a ");
// console.log("spoon. ");
// setTimeout(() => {
//   console.log("ice cream ");
// }, 3000);
// console.log("eat ");

//------------------------------------------------------

// Callbacks: Callbacks are simply calling functions in another function to form a relationship

// function one(call_two) {
//   console.log("step 1 completed. Please call step 2");
//   setTimeout(call_two, 3000);
//   call_two();
// }

// function two() {
//   console.log("step 2");
// }

// one(two);

// let order = (call_production) => {
//   console.log("Order placed. Please call production");
//   console.log("Processing...");
//   setTimeout(call_production, 3000);
// };

// let production = () => {
//   console.log("Order received, starting production");
// };

// order(production);

//----------------------------------------------------------

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
  }, 2000);
  call_production();
};

let production = () => {
  setTimeout(() => {
    console.log("Order received, starting production");

    setTimeout(() => {
      console.log("The fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added`);

        setTimeout(() => {
          console.log("The machine has started");

          setTimeout(() => {
            console.log(`ice cream is placed on the ${stocks.holder[0]}`);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added on toppings`);
              setTimeout(() => {
                console.log("serve ice cream");
              }, 1000);
            }, 2000);
          }, 2000);
        }, 1000);
      }, 2000);
    }, 2000);
  }, 5000);
};

order(0, production);
