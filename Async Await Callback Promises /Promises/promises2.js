 fetch("http://api.github.com/users/Iamkeizer")
 .then(function(res){
    return res.json()
 })
 .then(function(data){
    console.log(data);
 })
 .catch(function(error){
    console.log("Error: ",error); 
 })