const lis=document.querySelectorAll('li');
for (let li of lis){
    li.addEventListener('click',function(){
        li.remove();
    })
}

const tweetForm=document.querySelector('#tweetform');
tweetForm.addEventListener("submit",function(e){
    e.preventDefault();
    // const usernameInput=document.querySelectorAll("input")[0];
    // const tweetInput=document.querySelectorAll('input')[1];
    const username=tweetForm.elements.username.value;
    const tweet=tweetForm.elements.tweet.value;
    addTweet(usernameInput.value,tweetInput.value)
    usernameInput.value="";
    tweetInput.value="";
   
});
const addTweet=(username,tweet)=>{
    const newTweet=document.createElement("li");
    const bTag=document.createElement("b")
    bTag.append(username)
    newTweet.append(bTag)
    newTweet.append(`-${tweet}`)
    tweetContainer.append(newTweet);

}

tweetsContainer.addEventListener('click',function(e){
    e.target.nodeName==='LI'&& e.target.remove();
})