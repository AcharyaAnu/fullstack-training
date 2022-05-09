const btn=document.querySelector('#v2');

btn.onclick=function(){
    console.log("you clicked me")
    console.log("i hope it worked!!")
}

function scream(){
    console.log("aaahhhh");
    console.log("stop touching me")
}

btn.onmouseenter=scream;

document.querySelector('h1').onclick= ()=> {
    alert('you clicked the h1')
}

const btn3=document.querySelector('#v3');
btn3.addEventListener('dblclick',function(){
    alert("clicked!")
})


function twist(){
    console.log('twist')
}

function shout(){
    console.log('shout')
}


const tasButton=document.querySelector('#tas');

tasButton.addEventListener('click',twist)
tasButton.addEventListener("click",=hout)