const express=require("Express");
const app=express();
const path=require('path');
const {v4: uuid}=require('uuid');
const methodOverride=require("method-override");


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.set("views",path.join(__dirname,"views"))
app.set('view engine','ejs')

let comments=[
    {
     id:uuid(),   
     username:'todd',
     comment:'lol that is so funny'   
    },

    {
        id:uuid(),   
        username:'skyler',
        comment:"i like to go birdwatching with my dog"
    },

    {
        id:uuid(),   
        username:"sk8erboi",
        comment:"plzz delete your account,todd"
    }
]

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})


app.post('/comments',(req,res)=>{
    const {username,comment}=req.body;
    comments.push({username,comment,id:uuid()})
    res.redirect("/comments");
})


app.get('/comments/:id',(req,res)=>{
    const{id}=req.params;
    const comment= comments.find(c=>c.id=== id);
    res.redirect('comments/show',{comment});
})


app.get('/comments/:id/edit',(req,res)=>{
    const { id }=req.params;
    const comment= comments.find(c=>c.id === id);
    res.redirect('comments/edit',{comment});
})

app.delete('/comments/:id',(req,res)=>{
    const{id}=req.params;
    comments=comments.filter(c=>c.id !==id);
    res.redirect('/comments')

})


app.patch('/comments/:id',(req,res)=>{
    const {id}=req.params;
    const newCommentText=req.body.comment;
    const foundComment=comments.find(c=>c.id===id);
    foundComment.comment=newCommentText;

})







app.listen(3000, ()=>{
    console.log("Listening to port 3000")
})