const colorCode = function () {
    const hexVal = "0123456789ABCD";
    let color = "#";
    for(let i = 0; i < 6; i++){
        let a = hexVal[Math.floor(Math.random()*16)]
        if (a === undefined){
            a = 0
        }
        color+= a
    }
    return color;
}

const changeColor = function(){
    document.body.style.backgroundColor = colorCode()
};
let fun = null;
const startFun = function(){
    if(!fun){
        fun = setInterval(changeColor,1000);
    }
    
}
const stopFun = function(){
    clearInterval(fun)
    fun = null
}   
document.querySelector("#start").addEventListener('click',startFun,false)
document.querySelector("#stop").addEventListener('click',stopFun,false)