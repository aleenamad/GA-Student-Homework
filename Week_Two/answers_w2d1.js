/*
1. A light switch that can be either on or off.
- string with boolean
- if a light is on function show light else off function light off
2. A user's email address.
- object:
- const user {
name:
phone number:
email address:
}
-could also be with arrays
3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
-
4. A list of student names from our class.
-arrays or objects
const studentNames = ["name", "name", "name"]
const studentNames {
name:
name:
name:
}
5. A list of student names from our class, each with a location.
-arrays and objects
const student{
{ name:, location: }
}
6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
-arrays and objects
const student {
{Name:, location, tvShows: [""] },
}
*/

// Take it Easy
// const colorOfRainbow = ["red", "orange", "yellow","green", "blue", "indigo", "voilet"];
//
// console.log(colorOfRainbow[4]);
//
// const aleena = {
//   favoriteFood: "pizza",
//   hobby: "collect rare sneakers",
//   currentLocation: "Allen",
//   favoriteDatatype: "objects",
// }
//
// console.log(aleena.hobby);
//

// Crazy Object!
// const crazyObject = {
//   taco: [{meat: 'steak',
//          cheese: ['panela', 'queso', 'chihuahua']},
//          {meat: 'chicken',
//           salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
//         ],
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//     characters: [{
//       name: "Jeff",
//       occupation: "manager"
//     },
//     {
//       name: "funkhauser",
//       occupation: "tv dude"
//     },
//     {
//       name: "susie",
//       occupation: "jeffs wife",
//       favourtieHobby: "Swearing at Larry and Jeff"
//     },
//     ]
//   }
// }
// // 1
// console.log(crazyObject.taco[1].salsa[5]);
// // 2
// console.log(crazyObject.larry.quotes[0]);
// // 3
// console.log(crazyObject.larry.characters[2].favourtieHobby);
// // 4
// console.log(crazyObject.larry.nicknames[1]);
// // 5
// console.log(crazyObject.larry.characters[1]);

// Object-ception
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
