// lets assume we are having a db where data is saved 

// function savetoDb(data,success,failure){
//   let internetSpeed = Math.floor(Math.random()*10) + 1;
//   if(internetSpeed >4){
//     success();
//   }else{
//     failure();
//   }
// }

// savetoDb(
//     "apna Aman",
//     ()=>{
//         console.log("your data is saved");
//     },
//     ()=>{
//         console.log("Weak connection... Data is not saved ");
//     }
// );

// the above one is only saving only one data , but if we want to save another data if success occurs then we can again calll savetoDb(newData)
//   for new data again there is a case of success and failure 


// savetoDb(
//   "data1: apna Aman",
//   ()=>{
//     console.log("your data1 is saved");
//     savetoDb("data2",
//       ()=>{
//           console.log("Success2 : data2 saved");
//       },
//       ()=>{
//           console.log("Failure2 : data 2 is not saved");
//       }
//     )
//   },
//   ()=>{
//     console.log("Weak connection... Data1 is not saved ");
//   }
// );

// look how complex this callback hell looks, even we are just doing two level nesting
// lets again save a data if data 2 is success 

// savetoDb(   // now we are goint to optimise this whole cde with the help of the pomise . so commenting out this 
//   "data1: apna Aman",
//   ()=>{
//     console.log("your data1 is saved");
//     savetoDb("data2",
//       ()=>{
//           console.log("Success2 : data2 saved");

//           savetoDb(
//             "Data3",
//             ()=>{
//               console.log("Success : Data 3 is saved ");
//             },
//             ()=>{
//               console.log("Falure : data3 is not saved");
//             }
//           )
//       },
//       ()=>{
//           console.log("Failure2 : data 2 is not saved");
//       }
//     )
//   },
//   ()=>{
//     console.log("Weak connection... Data1 is not saved ");
//   }
// );


// so this type is code is very confusing even for the basic operaton , to save the data if success occurs, 
// * CallBack Hell *
// but this type of hell actullly exist in various code : 
//  we dont create this mess , this is what it is !!!!


// ! So here the PROMISES comes : to tackle this hell 
// ? the promises object represents the eventual completion (or failure) of the an asynchronous operation and its resulting value;
// so a promise we give ,it should complete , but it can be failure . so it is eventual completion of the operation
// so promise can be success or failure , and this promise also store the result of that success or failure;


//! Asynchronous ? -> it is working on the basis of the condition , if it success then it occurs, otherwise not . so it is not affecting th eother part of the code 

// now we will work with the promise with the same block of code in the top i.e. savetoDb


function savetoDb(data){   // it will only take the data 
  // this function will return a Promise , it can be success or failure
  return new Promise((resolve, reject)=>{   // this savetoDb function return a promise that it will work , whether success or failure it dont know. so it has arrow function which has two para succ and fail
    let internetSpeed = Math.floor(Math.random()*10) + 1;
    if(internetSpeed > 4) {
      resolve("Success : data was saved");
    }else{
      reject("Failure : Weak connection");
    }
  });
}

let request = savetoDb("Aman") ; // request is a promises object 
// we willl use then and catch method of promise : then is the work when success occurs , and when failure done it throws an error so catch catches it
request
  .then(()=>{
    console.log("Promise is resolved");
  })
  .catch(()=>{
    console.log("Promise is rejected");
  });


  // short way to write this : we dont use request , directly name  of the function


// savetoDb("Aman")
//   .then(()=>{
//     console.log("Promise is resolved");
//   })
//   .catch(()=>{
//     console.log("Promise is rejected");
//   });

// ! Promise chaining
savetoDb("Aman")
  .then(()=>{
    console.log("Data 1 is resolved ");
    savetoDb("hello World")
    .then(()=>{
      console.log("DAta  2 is resolved ...");
    });
  })
  .catch(()=>{
    console.log("Promise is rejected");
  });


// ! Promises  Improved version of promise chaining

savetoDb("Aman")
  .then((result)=>{
    console.log("Data 1 is resolved ");
    return savetoDb("hello World");     // return the value of savetoDb out of the then . so he output of the then method is the second save method
    console.log(result);
    // we will implement the output to anther then

    
  })
  .then((result)=>{
    console.log("Data 2 saved");
    return savetoDb("third one");
    console.log(result);

  })

  .then((error)=>{
    console.log("data 3 saved");
    console.log(result);
  })
  .catch(()=>{
    console.log("Promise is rejected");
    console.log(error);

  });

