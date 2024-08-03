let todo = [];
let req  = prompt("Please enter your request for the to do app:");

while(true){

    if(req == "quit"){
        console.log("You quit :( ")
        break;
    }
    else if(req == "list"){
        console.log("---------------------------");
        for (task of todo){
            console.log(task);
        }
        console.log("---------------------------");
    }
    else if(req == "add"){
        let task = prompt("Enter the task to add : ");
        todo.push(task);
        console.log("Task Added");

    }
    else if(req == "delete"){
        let idx = -1;
        console.log("here is the list of your todo, select the item u wanna delete:");
        console.log("---------------------------");
        for (task of todo){
            console.log(task);
        }
        console.log("---------------------------");
        let del = prompt("Enter the item u want to delete from the console window :");
        for(let i = 0 ; i<todo.length; i++){
            if(todo[i] == del) idx = i;

        }
        todo.splice(idx,1);
        console.log("here is the updated list :");
        console.log("---------------------------");
        for (task of todo){
            console.log(task);
        }
        console.log("---------------------------");
    
    }else{
        console.warn("Wrong request entered :( ");
    }
    req  = prompt("Please enter your request for the to do app:");

    
}