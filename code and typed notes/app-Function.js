//! create a function to roll a dice that prints the value of the dice

function rollDice(){
    let val = Number(Math.floor(Math.random()*6 )+1);
    console.log(`The value on the top on rolling the dice is ${val}`);
}
rollDice();

let a = 10 ;
function print(){
    console.log(a);
}
print();

// ? both are possible

// function print(){
//     console.log(a);
// }
// let a = 10 ;
// print();
// * called hoisting

// ? but if we declare after the calling then it will throw error!
// ? but if we declare in the inner function then its not work . * called lexical scope 
// ? also possible in nested fnction


function outerFunc(){


    function innerFunc(){

    }
    innerFunc();  // here  it is possible as it is defined inside the  function
}
outerFunc();

// * but innerFunc(); is not possible ; because its scope is not outside the function;


// ! Function Expression 
// we can store the function in a varialble but the function //? dont have a name 


let sum = function(a,b){  // here sum is variable name , not function name ,OK;
    return a+b;
}
// console.log(sum);  //* this will not work as sum store the function . it will show the function
// we will call by the variable name 
console.log(sum(1,2)); 

//?  Higher Order function
// * Takes one or more functions as arguement 

function multipleGreet(func, n){  // here func is any random name.  
    for(let i = 0  ; i<=n; i++){
        func();                    // as func() is along with () so thats why func variable is acting as function. we can call normal funtion too 
    }                               // we dont need to pass func as arguement t use inside . we can use other function normally as we do in C.

}
let greet = function(){
    console.log("hello");

}
multipleGreet(greet,2);      // always pass by name of f(x). not by greet();


// ? returns Function

function oddEvenTest(request){   // it is a factory of function which on request generate new functions 
    // if request is odd then it will create a odd function to check odd. in that function if we pass odd no. it will return true;
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    } else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }else{
        console.log("Wrong request");
    }
}

let func = oddEvenTest("odd");
console.log(func(9)); // gives true;



// ! Methods 
// * defined on objects as key as method name and value is function;

const calculator = {
    num : 56.5434,
    add : function(a,b){
        return a+b;
    
    },
    sub: function(a,b){
        return a-b;
    },
    mul : function(a,b) {
        return a*b;
    },
    div : function(a,b){
        return a/b;
    }
};

console.log(calculator.num,calculator.add(1,2), calculator.div(6,2), calculator.mul(3,5), calculator.sub(4,9));
//TODO  we can see we can fetch num as well as function from the  calcu;ator.
//TODO  similar was the Math.PI and Math.random();
//TODO  thats why type of Math is an object;

// TODO  SIMILARLY array and string type is object as 
// todo  arr.push() str.slice() is accessible as push and slice is key defining a function in the object array and string
