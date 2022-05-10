// const multiply=(x,y)=>x*y;

// const square=(x)=>multiply(x,x);

// const isRightTriangle=(a,b,c)=>{
//     return square(a)+square(b)===square(c);

// };
// isRightTriangle(3,4,5);



// console.log("sending request to server")
// setTimeout(()=>{
//     console.log("Here is your data from the Server..")

// },3000)
// console.log("i am at the end of the file.")


// setTimeout(()=>{
//     document.body.style.backgroundColor="red";
//     setTimeout(()=>{
//         document.body.style.backgroundColor="orange";
//         setTimeout(()=>{
//             document.body.style.backgroundColor="green";
//         },1000)
//     },1000)
// },1000)


// const delayedColorChange=(newColor,delay,doNext)=>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor=newColor;
//         doNext && doNext();
//     },delay)
// }

// delayedColorChange('olive',1000,()=>{
//     delayedColorChange('red',1000,()=>{
//         delayedColorChange('green',1000,()=>{
//             delayedColorChange('white',1000,()=>{
//                 delayedColorChange('blue',1000,()=>{
//                 })
//             })
//         })    
//     })
// })return

const delayedColorChange=(color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve();

        },delay)
    })

}

// delayedColorChange("red",1000)
//     .then(()=>delayedColorChange('orange',1000))
//     .then(()=>delayedColorChange('blue',1000))
//     .then(()=>delayedColorChange('gray',1000))
//     .then(()=>delayedColorChange('yellow',1000))
//     .then(()=>delayedColorChange('green',1000))
//     .then(()=>delayedColorChange('violet',1000))
//     .then(()=>delayedColorChange('pink',1000))
    
async function rainbow(){
    await delayedColorChange('red',1000)
    await delayedColorChange('blue',1000)
    return "all done"
}

rainbow().then(()=>console.log("end of rainbow"))

async function printRainbow(){
    await rainbow();
    console.log("end of rainbow")
}















