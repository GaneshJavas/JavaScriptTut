async function myAsyncFunc(){
    try{
        console.log("Async executed");
        const res = await fetch("http://api.github.com/users/Iamkeizer")
        console.log("Response in String: ",res);
        const data = await res.json()
        console.log("Response as a Json data: ",data);
        
    }
    catch(error){
        console.log("Error Found");
        
    }
}

myAsyncFunc()