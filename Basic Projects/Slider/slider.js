const left = document.querySelector(".left_arrow");
const right = document.querySelector(".right_arrow");
const frame = document.querySelector(".frames");
const photo = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom")

let mouse_clicked = 0; 
let length = photo.length

const nextSlide = ()=>{
    frame.style.transform = `translateX(-${mouse_clicked * 800}px)`;
    // mouse_clicked++
}
const prevSlide = ()=>{
    frame.style.transform = `translateX(-${(mouse_clicked) * 800}px)`;
    // mouse_clicked--;
}
const firstSlide = ()=>{
    frame.style.transform = `translateX(0px)`;
    mouse_clicked = 0;
}
const lastSlide = ()=>{
    frame.style.transform = `translateX(-${(length - 1) * 800}px)`;
    mouse_clicked = length-1;
}
right.addEventListener("click", function(){
    // mouse_clicked < length ? nextSlide() : firstSlide();
    mouse_clicked +=1;
    if(mouse_clicked < length){
        nextSlide();
    }
    else{
       firstSlide(); 
    } 
}, false)


left.addEventListener("click", function(){
    mouse_clicked -= 1;
    if(mouse_clicked >= 0){
        prevSlide();
    }
    // else if(mouse_clicked < 0){
    //     lastSlide();
    // }
    // else{
    //     firstSlide();
    // } 
    else{
        lastSlide()
    }
}, false)



// -----------------------------------------------

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);   
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";
