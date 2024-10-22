"use strict";
//Exercise 2
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let average = 0;
  for (let index = 0; index < scores.length; index++) {
    // const element = array[index];

    // console.log(scores[index]);
    average = (average + scores[index]);
  }
  console.log(average / scores.length);
}
getAverage(myScores)

// let MyScores = [92, 98, 84, 76, 89, 99, 100];
// let yourScores = [82, 98, 94, 88, 92, 100, 100];
// function getAverage(scores) {
//     let average = 0
//     for (let index = 0; index < scores.length; index++) {
//        //  const element = scores[index];
//         // console.log(scores[index]);
//         average = (average + scores [index])
//     }
//     console.log(average / scores.length);

// }
// getAverage(MyScores)
