/*let count=0;
while(count<10){
    count++;
    console.log(count);
}

const SECRET="BabyHippo"
let guess=prompt("enter the secret code..")
while(guess!==SECRET){
    guess=prompt("enter the secret code..")
}
console.log("congrats you got the secret");


let input=prompt("say something")
while(true){
    input=prompt(input);
    if(input.toLocaleLowerCase()==="stop") break;
}
console.log("ok you win");

let maximum=parseInt(prompt("Enter the maximum number"));
while(!maximum){
    maimum=parseInt(prompt("enter a valid Number!"))
}
const targetNum=Math.floor(Math.random()*maximum)+1;
console.log(targetNum);

let guess=parseInt(prompt("enter yor first guess"));
let attempts=1;

while(parseInt(guess)!==targetNum){
    if (guess==="q") break;
    attempts++;
    if (guess>targetNum){
        guess=prompt("too high!enter a new guess");

    }
    else{
        guess=prompt("too low!entera new guess");
    }
}
if (guess==="q"){
    console.log("ok u QUIT")
}else{
    console.log("congrts you win")
    console.log(`you got it.it took ${attempts} guess`);

}
*/

/* for of loop*/

/*const seatingChart=[['kri','erik','nmita'],['geo','jua','antony','kevin'],['yuma','sakura','jack']]

for (let i=0;i<seatingChart.length;i++){
    const row=seatingChart[i];
    for (let j=0;j<row.length;j++){
        console.log(row[j]);

    }
}

for (let row of seatingChart){
    for (let student of row){
        console.log(student);

    }
}

for (let char of "hello world"){
    console.log(char)
}

coding exercise

const number=[1,2,3,4,5,6,7,8,9];

for (let char of number){
   console.log(char**2);
   }


   ITRRATING OVER OBJECT*/

const testScores={
    keenam:80,damon:67,kim:89,shawn:91,marlon:89,vonnie:60
}

// for (let person in testScores){
//     console.log(`${person}  score ${testScores[person]}`);
// }

let total=0;
let scores=Object.values(testScores);
for (let score of scores){
    total+=score;

}
console.log(total/scores.length)
















