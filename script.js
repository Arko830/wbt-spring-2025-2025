// 1st code

let a=10;
let b=20;

a = a+b;
b= a-b;
a=a-b;
console.log(`a= ${a}, b= ${b}`);


// 2nd code

function square(n){
    return n*n;
}

for(i=1;i<=10;i++){
    console.log("square is"+ square(i) );
}