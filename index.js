// for (let age = 30; age < 40; age++){
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//    for (let i = 0; i < gifts.length; i++) {
//       console.log(`Wrapped ${gifts[i]} and added a bow!`);
//       debugger;
//    }

//    return gifts;
// }

// wrapGifts(gifts);

const messages = [];

function writeCards(arrayOfStringNames, eventName){

   for(let i = 0; i < arrayOfStringNames.length; i++){
      messages.push(`Thank you, ${arrayOfStringNames[i]}, for the wonderful ${eventName} gift!`);
   }

   return messages;
}

function countDown(n){
   while(n >= 0) {
      console.log(n);
      n--;
      debugger;
   }
}
