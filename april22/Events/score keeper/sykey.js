// async function hello(){

// }

// const sing=async ()=>{
//     throw "ohh noo!"
//     return "la la la la"
// }

// sing()
//     .then((data)=>{
//         console.log("promise resolved with",data)
// })
//     .catch(err=>{
//         console.log("oh no,promise rejected")
//         console.log(err)
//     })


const login=async(username,password)=>{
    if(!username || !password) throw "missing credentials"
    if(password ==="corgifeerarecute") return"welcome!"
    throw'invalid password'

}

login("asjjdhcb","corgifeerarecute")
    .then(msg=>{
        console.log("logged in!")
        console.log(msg)
    })
    .catch(err=>{
        console.log("error!")
        console.log(err)
    })

