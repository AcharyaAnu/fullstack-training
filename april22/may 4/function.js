/*function singSong(){
    console.log("do");
    console.log("re");
    console.log("mi")

}
singSong()



function greet(firstName){
    console.log(`hey there,  ${firstName}`)
}


return keyword

function add(x,y){
    return(x+y)
}


FUNCTION SCOPE.

let totalEgg=0;
function collectEgg(){
    totalEgg=6;

}
console.log(totalEgg);
collectEgg();
console.log(totalEgg);


FUNCTION EXPRESION
const add=function (x,y){
    return x+y;

}
HIGHER ORDER FUNCTION

function callTwice(func){
    func();
    func();
}

function callTenTimes(f){

    for (let i=0;i<10;i++){
        f();
    }
}
function rollDie(){
    const roll=Math.floor(Math.random()*6)+1
    console.log(roll);
}
callTwice(rollDie)


RETURN FUNCTION


function makeMysteryFunc(){
    const rand=Math.random();
    if (rand > 0.5){
        return function (){
            console.log("congrats,im a good function")
        }
    }else{
        return function(){
            console.log("you have been nfected by the computer virus")
        }
    }
}


defining Method

const myMath={
    PI:3.14159,
    square (num){
        return num*num;

    },
    cube (num){
        return num**3;
    }
}

TRY/CATCH

try{
    hello.toUpperCase();

} catch{
    console.log("Error")
}
*/

function yell(msg){
    try{
        console.log(msg.toUpperCase().repeat(3))
    } catch(e) {

        console.log("please pass the string")

    }
}










































