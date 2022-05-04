let input=prompt("what would you like to do?")
const todos=['collect chicken eggs','clen litter box'];
while(input!=="quite"&& input!=="q"){
    if (input==="list"){
        console.log('***********')
        for(let i=0;i<todos.length;i++){
            console.log(`${i}:${todos[i]}`)
        }
        console.log('***********')
    }else if(input==='new'){
        const newTodo=prompt("ok,what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo}  adedto the list.`)
    }else if(input==="delete"){
        const index=parseInt(prompt('ok,enter an index to delete:'))
        if(!Number.isNaN(index)){
            const deleted=todos.splice(index,1);
            console.log(`ok, deleted ${deleted[0]}`);
        }else{
            console.log("unknow index")
        }
    }
    input=prompt("whatwould you like to do?")
}
console.log("ok you quite APP")