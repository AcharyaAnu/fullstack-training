// function hex(r,g,b){
//     return '#'+((1 << 24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
// }
// function rgb(r,g,b){
//     return`rgb(${r},${g},${b})`;
// }

// function makeColor(r,g,b){
//     const color={};
//     color.r=r;
//     color.g=g;
//     color.b=b;
//     color.rgb=function(){
//         const {r,g,b}=this;
//         return`rgb(${r},${g},${b})`;

//     };
//     color.hex=function(){
//         const {r,g,b}=this;
//         return(
//          '#'+((1 << 24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
//         );
//     };


//     return color;
// }

// const firstColor=makeColor(35,255,150);
// firstColor.hex();


// function Color(r,g,b){
//     this.r=r;
//     this.g=g;
//     this.b=b;
    
// }
// Color.prototype.rgb=function(){
//     const {r,g,b}=this;
//     return`rgb(${r},${g},${b})`;
// }
// Color.prototype.hex=function(){
//     const {r,g,b}=this;
//         return '#'+((1 << 24)+(r<<16)+(g<<8)+b).toString(16).slice(1);

// }
// Color.prototype.rgba=function(a=1.0){
//     const{r,g,b}=this;
//     return `rgba(${r},${g},${b},${a})`;
// }
// const color1=new Color(40,255,100);
// const color2=new Color(0,0,0);


// class Color{
//     constructor(r,g,b){
//         console.log("inside constructor");
//         console.log(r,g,b)
//     }
// }
class Pet{
    constructor(name,age){
        console.log("in pet constructor")
        this.name=name;
        this.age=age;
}
eat(){
    return `${this.name} is eating`
}
}
class Cat extends Pet{
    constructor(name,age,livesLeft=9){
        console.log("in cat constructor");
        super(name,age);
        this.livesLeft=livesLeft;
    }
    meow(){
        return"meoww";
    }    
}

class Dog extends Pet {
    bark(){
        return"woof"
    }
}






















