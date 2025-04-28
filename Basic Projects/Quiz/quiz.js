const data = [{
    id: 1,
    question: "What is our National Animal?",
    answers: [
        
            {answer: "Dog", isCorrect: false},
            {answer: "Lion", isCorrect: false},
            {answer: "Tiger", isCorrect: true},
            {answer: "Leopard", isCorrect: false},
        
    ],
},
{
    id: 2,
    question: "What is our National Bird?",
    answers: [
        
            {answer: "Peacock", isCorrect: true},
            {answer: "Kingfisher", isCorrect: false},
            {answer: "Owl", isCorrect: false},
            {answer: "Eagle", isCorrect: false},
        
    ],
},
{
    id: 3,
    question: "What is our National Fruit?",
    answers: [
        
            {answer: "Apple", isCorrect: false},
            {answer: "Mango", isCorrect: true},
            {answer: "Avacardo", isCorrect: false},
            {answer: "Banana", isCorrect: false},
        
    ],
}];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next")
const pAgain = document.querySelector(".play");

let qindex = 0;
let cAnswer = 0;
let wAnswer = 0;
let tScore = 0;
let answerSelectedStore = [];

const backward = ()=>{
    if((selectedAnswers[pos] != correctAnswers[pos]) && (answerSelected == correctAnswers[pos])){
        cAnswer++
        selectedAnswers[pos] === null? noAnswer-- : wAnswer--
    }else if ((selectedAnswers[pos] == correctAnswers[pos]) && (answerSelected != correctAnswers[pos])){
        wAnswer++
        selectedAnswers[pos] === null? noAnswer-- : cAnswer--
        
    }
}

const forward = ()=>{
    selectedAnswers.push(answerSelected)
    selectedAnswers[pos]==correctAnswers[pos] ? cAnswer++ : wAnswer--
}


const showQuestion = function(qNumber){
    answerSelected = null;
    question.textContent = data[qNumber].question;
    answers.innerHTML = data[qNumber].answers.map((item, index)=>
        `<div class="answer">
            <input type="radio" name="answer" id="answer${index+1}" value="${item.isCorrect}">
            <label for="answer${index+1}">${item.answer}</label>  
        </div>`
    ).join("");

    selectAnswer();
}

const selectAnswer = ()=>{
    answers.querySelectorAll(".answer").forEach(element => {
        element.addEventListener("click",(e)=>{
            answerSelected = e.target.value;
                      
        })
    });
    
}

const submitAnswer = ()=>{
    next.addEventListener("click",()=>{
        answerSelected === "true" ? cAnswer++ : wAnswer++
        answerSelectedStore.push(answerSelected);
        // console.log(answerSelectedStore);
        // console.log(`Ques. ${qindex + 1}   Correct: ${cAnswer}  Wrong: ${wAnswer}`);
        qindex++
        if(qindex<data.length){
            showQuestion(qindex)
        }else{
            showResults()
        }
        
    })
    prev.addEventListener("click",()=>{
        answerSelected === "true" ? cAnswer++ : wAnswer++
        answerSelectedStore.push(answerSelected);
        // console.log(answerSelectedStore);
        // console.log(`Ques. ${qindex + 1}   Correct: ${cAnswer}  Wrong: ${wAnswer}`);
        qindex++
        if(qindex<data.length){
            showQuestion(qindex)
        }else{
            showResults()
        }
        
    })
    
}
const showResults = ()=>{
    document.getElementsByClassName("game")[0].style.display = "none";
    document.getElementsByClassName("result")[0].style.display = "block";
    document.getElementsByClassName("correct")[0].innerText = `Correct Answer: ${cAnswer}`;
    document.getElementsByClassName("wrong")[0].innerText = `Wrong Answer: ${wAnswer}`;
    document.getElementsByClassName("score")[0].innerText = `Score: ${cAnswer-wAnswer}`;
}
showQuestion(qindex)
submitAnswer()
