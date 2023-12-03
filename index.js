// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  } 

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 


function writeCards(names, eventName) {
    let messages = []; // Step 1: create a new, empty array
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; // Step 2: build the message using string interpolation
      messages.push(message); // Add the message to the new array
    }
  
    return messages; // Step 3: return the new array
  }
  
  const names = ['Ada', 'Bob', 'Charlie'];
const event = 'birthday';

const messages = writeCards(names, event);
console.log(messages); 

function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  } 

  countDown(10);