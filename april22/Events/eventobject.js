document.querySelector('button').addEventListener('click',function(evt){
    console.log(evt)
})


// const input=document.querySelector('input');
window.addEventListener('keydown',function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log('up');
            break;
        case 'ArrowDown':
            console.log('down');
            break;
        default:
            console.log('IGNORED!')
    }
})

// input.addEventListener('keyup',function(){
//     console.log("keyup")
// })