// const number=[1,2,3,4,5,6,7,8,9,10]

// number.forEach(function (el){
//     console.log(el)


// const movies=[
//     {
//         title:'Amadeus',
//         score:99
//     },
//     {
//         title:'Stand by Me',
//         score:85
//     },
//     {
//         title:'Parastite',
//         score:95

//     }
// ]

// const tit=movies.map(function(mov){
//     return(mov.title)
// })

// ARROW Function

// const add=(x,y)=>{
//     return(x+y)
// }
// ARROW FUNCTION WITH IMPLICIT RETURN

// const rollDie=()=>(
//     Math.floor(Math.random()*6)+1
// )

// const movies=[
//        {
//             title:'Amadeus',
//             score:99
//         },
//         {
//             title:'Stand by Me',
//             score:85
//         },
//         {
//             title:'Parastite',
//             score:95
    
//         }
//     ]



//     const newmovie=movies.map(movie=>(
//         `${movie.title}-${movie.score/10}`
//     ))


// SET TIMEOUT


// console.log("hiii")
// setTimeout(()=>{
//     console.log("areyou there")
// },3000)
// console.log("good bye")

// filter method

// const number=[1,2,3,4,5,6,7,8,9,10,11,12,13]
// number.filter(n=>{
//     return n <7
// })
// some/every
// const exams=[78,89,98,90,94,67,89,99]

// exams.every(score=>score>=70

// REDUCE

// const prices=[9.99,1.50,19.99,49.99,30.50];

// let total=0;
// for (let price of prices){
//     total+=price
// }
// console.log(total)
// const total=prices.reduce((total,price)=>){
//     return total+price
// }
// NEWER JAVASCRIPT FEATURES


// function rollDie(numSides=6){
//     return Math.floor(Math.random()*numSides)+1
// }

// REST PARAMS



// function sum(...num){
//     return num.reduce((total,el)=>total+el)
// }



// function raceResults(gold,silver,...everyoneElse){
//     console.log(`gold medal goes to:${gold}`)
//     console.log(`silver medal goes to:${silver}`)
//     console.log(`and thank you everyone:${everyoneElse}`)
// }


// DESTRUCTURING ARRAY
// const score=[9876,9543,6575,2345,432,321]
// const [gold,silver,bronze,...everyoneElse]=score;

//destructuring from object

const user={
    email:'user123@gmail.com',
    password:'hey123',
    firstname:'users',
    born:1930,
    died:19980
}
const {email,born,password,firstname,} =user

const{born:birthYear, died:deathYear}=user;










 




























