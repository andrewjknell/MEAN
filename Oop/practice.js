function ninjaBelt(ninja, beltColor){
    console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
  }
  ninjaBelt('Eileen', 'black');


function ninjaBelt2(ninja){
    return function belt(beltColor){ //note the closure here!
      console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
    }
  }
  ninjaBelt2('Eileen')('black'); //note the double invocation here.