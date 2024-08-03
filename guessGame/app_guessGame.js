window.onload = function(){
const range = Number(prompt("Please enter the range for the system to guess :"));
const sysGuess = Math.floor(Math.random()*range)+1;
const turns = Number(prompt("Decide your no. of turns:"));

let userGuess = Number(prompt("Please guess a number to match with the system. You have "+turns+" turns left!")); // Convert userGuess to a number
let i = turns;
for(i = turns-1; i>=1; i--){
    if(userGuess > range) alert(`please enter the no. between the range that u provided which is ${range}.`);
    if(userGuess === sysGuess){
        alert("Congratulations! You guessed correct 👍, Check the console window...");
        console.log(`U guessed the random no. generated py system correctly . The no. was ${sysGuess}. U had taken ${turns-i} turns`);
        break;
    }
    else{
        if(userGuess>sysGuess){
            userGuess=  Number(prompt(`Please guess again, You guessed wrong :( . You have ${i} turns left \n Hint! Your guess is too long.Please guess small`));
        }else if(userGuess<sysGuess){
            userGuess=  Number(prompt(`Please guess again, You guessed wrong :( . You have ${i} turns left \n Hint! Your guess is too small.Please guess large`));
        }
    }
}
    
if (i==0){
    alert(`Oh no! Your turns are over! No turns left . please check the correct no. in the console window...`);
    console.log(`After all the guesswork . U lost all your chances . The correct guess was ${sysGuess}`);
}
console.log("Bye! Bye!");
};