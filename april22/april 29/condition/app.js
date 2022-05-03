/*let random=Math.random();
if (random <0.5){
    console.log("your nmber is less than o.5");
} else{
    console.log("your num is greater than 0.5");
} 
console.log(random);*/


/*const daysOfWeek=prompt('Enter a day').toLowerCase();

if (daysOfWeek==="Monday"){
    console.log("uggg i hate monday");

} else if (daysOfWeek==="Saturday"){
    console.log("yay i love Saturday");
} else if (daysOfWeek==="Friday"){
    console.log("Friday are decent especially after work");
} else{
    console.log("mehhh");
}*/

/*const age=90;

if (age < 5) {
    console.log("you are a baby. you get in for free.")
} else if (age<10){
    console.log("you are child.you pay $10.")
} else if (age < 65){
    console.log("you are an adult. you pay $20");
}else{
    console.log("you are senior.youpay $10" );
}*/

const password=prompt("Please enter the password");

if (password.length>=6){
    if (password.indexOf(" ")===-1){
        console.log("valid password");
    }else {
        console.log("password cannot contain space");
    }

}
 else{
    console.log("password too short. must be 6+ character")
}












