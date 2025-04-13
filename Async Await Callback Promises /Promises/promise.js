// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:
    // pending: initial state, neither fulfilled nor rejected.
    // fulfilled: meaning that the operation was completed successfully.
    // rejected: meaning that the operation failed.


const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Task 1 is Done");
        resolve();
    },1000)
});

promiseOne.then(function(){
    console.log("My Promise One is Consumed");   
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Alternate Task 1 is Done");
        resolve();
    },1000)
}).then(function(){
    console.log("Alternate Promise is Consumed");   
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        
        resolve({"username":"Hello", "password":"password"});
    },1000)
});

promiseTwo.then(function(userDetails){
    console.log("Promise 2 : ",userDetails);   
})


const promiseError = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({"username":"Hello", "password":"password"});
        }
        else{
            reject("Error: Wrong User Crendentials")
        }
    },1000)
});

promiseError
.then(function(userDetails){
    console.log("In PromiseError: ", userDetails);   
})
// UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error: Wrong User Crendentials".
.catch(function(error){
    console.log(error);
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({"username":"Hello", "password":"password"});
        }
        else{
            reject("Error: Wrong User Crendentials")
        }
    },1000)
})

promiseThree
.then(function(userDetails){
    return userDetails.username
})
.then(function(username){
    console.log("Promise 3: ",username);   
})
.catch(function(error){
    console.log(error);
    
})
.finally(function(){
    console.log("Job Done");  
})





