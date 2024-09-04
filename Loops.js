//For Loop
//The for loop repeats a block of code a specified number of times.

for(let i =0; i<5;i++){
    console.log(i)
}

//While Loop
// while loop executes a block of code as long as the condition is true.

let i = 0
while(i<5){
    console.log(i);
    i++;
}

//For in Loop
//The for...in loop is used to iterate over the properties of an object.

const Person ={
    name:"Subha",
    age:21,
    university: "VIT",
}
for(let key in Person){
    console.log(key+" : "+Person[key])
}

//For Of Loop
let My_Array =["Red","Blue","Green"]
for(let color of My_Array){
    console.log(color)
}