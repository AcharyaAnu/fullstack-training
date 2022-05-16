
// function validateForm(){
//     var a=document.forms["form"]["inp1"].value;
//     var b=document.form["form"]["inp2"].value;
//     if(!a||!b){
//         alert("Please fill all reired fields");
//         return false;
//     }
// }


const mainForm=document.querySelector('#form')
mainForm.addEventListener('submit', async function(e){
    e.preventDefault();
    const usern=mainForm.elements.username.value;
    const email=mainForm.elements.emailid.value;
    const ctcnum=mainForm.elements.contactnum.value;
    const addqry=mainForm.elements.addqry.value;

    const newLi=document.createElement("li");
    const bTag=document.createElement('b');
    bTag.append(usern)
    newLi.append(bTag);
    newLi.append(`-${addqry}`)
    console.log(newLi)
})

// const button=document.querySelector("#cbtn");
// button.addEventListener("click",function(){
//     const r=Math.floor(Math.random()*255);
//     const g=Math.floor(Math.random()*255);
//     const b=Math.floor(Math.random()*255);
//     const newClr=`rgb(${r},${g},${b})`
//     document.body.style.backgroundColor=newClr;

// })
const delayedColorChange=(color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve();
        },delay)
    })
}
delayedColorChange("red",1000)
    .then(()=>delayedColorChange('orange',1000))
    .then(()=>delayedColorChange('blue',1000))
    .then(()=>delayedColorChange('yellow',1000))
    .then(()=>delayedColorChange('gray',1000))
    .then(()=>delayedColorChange('lightgreen',1000))
    .then(()=>delayedColorChange('pink',1000))

