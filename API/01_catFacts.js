let url = "https://catfact.ninja/fact";
/*
fetch(url)   // it returns a promise in te form of response , so we can sue then and catch hre and print te response
.then((res)=>{
    console.log(res);
    // res.json().then((data)=>{
    //     console.log(data);
    // });
    return res.json();
})
.then((data)=>{       /// can also use the previous format  but this chaining makes it more readable
    console.log(data);
    console.log(data.fact);
})
.catch((err)=>{
    console.log("Error : ", err);
});
*/

// we will use below to get two data 
fetch(url)   // it returns a promise in te form of response , so we can sue then and catch hre and print te response
.then((res)=>{
    // console.log(res);
    return res.json();
})
.then((data)=>{       /// can also use the previous format  but this chaining makes it more readable
    console.log("data 1 is => ",data.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log("Data 2 => ",data2.fact);
})
.catch((err)=>{
    console.log("Error : ", err);
}); 



// API Fetch with async and await 

async function getFacts(){
    try{
        let res = await fetch(url);    // why await because js is syncronous , so it will not wait for the api output, so we await for this. 
        let data = await res.json();    // why await again? as it return a promise which is asynchronous too...
        console.log(data.fact);
    }catch(err){
        console.log("error ---  ", err);
    }
    console.log("bye...");
}
