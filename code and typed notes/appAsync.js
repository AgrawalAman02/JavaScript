/*
async function greet(){
    // throw "404 page not found";   // for checking the error statement
    return "hello";
}

// async unsing arrow function : 
// let hello = async () =>{}   // return undedined as we dint return anything 

// now we can call greet function and use then and catch keyword as greet retrun a promise 

greet()
.then((result)=>{

    console.log("success");
    console.log("promise was ", result);
})
.catch((error)=>{
    console.log( "fail with error : ", error);
});

*/



/*
// lets learn about the await
// lets create a function that return a promise which is async as we are using setTimeout()



function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo() {
    await getNum();
    // until and unless the promise of first is not resolved second will now called  .. good :)
    await getNum();
    await getNum();
    await getNum();
}
*/

// now we will write the code for the color change function that wee write in the promises 
/*
let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function  savetoDb(){
    await changeColor("red",1000);
    await changeColor("blue", 1099);
    await changeColor("yellow",2000);
    await changeColor("green", 1500);

}
savetoDb();

*/

// now in the above we see that there is only the case of resolving , not any case of rejection
// lets build cases in changecolor() , that if random num >5 then reject
// and we also add some more operation in savetoDb method to perform after the color change 

let h1 = document.querySelector("h1");
/*
function changeColor(color, delay){
    return new Promise((resolve, reject) =>{

        setTimeout(()=>{

            let num = Math.floor(Math.random()*10)+1;
            if(num > 5){
                reject("Promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function  savetoDb(){
    await changeColor("red",1000);
    await changeColor("blue", 1099);
    await changeColor("yellow",2000);
    await changeColor("green", 1500);

    // these operation will work after the all color change 
    let a = 5;
    console.log(a);
    console.log("new Number = ", a+3);

}

// what do we notice that if some num > 5 the operation after that rejection didnt performed...
*/

// now we will use try and catch to handle that error. use try where u thing there is a chance of getting the error
function changeColor(color, delay){
    return new Promise((resolve, reject) =>{

        setTimeout(()=>{

            let num = Math.floor(Math.random()*10)+1;
            if(num > 5){
                reject("Promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function  savetoDb(){
    try{
        await changeColor("red",1000);
        await changeColor("blue", 1099);
        await changeColor("yellow",2000);
        await changeColor("green", 1500);
    }catch(err){
        console.log("error caught");
        console.log(err);
    }

    // these operation will work after the all color change 
    let a = 5;
    console.log(a);
    console.log("new Number = ", a+3);

}
