/*console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

for (let i=1; i<=10;i++){
    console.log(i);
}

for (let i=0; i<=20;i+=2){
    console.log(i)
}

for(let i=100;i<=100;i*=10){
    console.log(i);
}

const animals=["lions","tigers","leopard"]

for (let i=0; i<animals.length;i++){
    console.log(i,animals[i]);
}

const animals=["lions","tigers","leopard"]

for (let i=animals.length; i>=0;i--){
    console.log(i,animals[i]);
}




for(let i=1;i<=10;i++){
    console.log(`i is:${i}`);
    for (let j=1;j<4;j++){
        console.log(`    j is:${j}`);
    }
}*/

const seating=[['aa',"bb","cc"],["ww","ee","rr"],["ff","gg","vv"]]
for (let i=0;i<seating.length;i++){
    const row=seating[i];
    console.log(`ROW #${i+1}`);
    for (let j=0;j<row.length;j++){
      console.log(row[j]);
    }
}




