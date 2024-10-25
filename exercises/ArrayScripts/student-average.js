"use strict";
let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
   ];

   let student;

   for(student of students){
    let avg = 0
    let score;
    for(score in student.scores){
        avg = avg + score
    }

    avg = (avg/student.scores.length).toFixed(2)
   }