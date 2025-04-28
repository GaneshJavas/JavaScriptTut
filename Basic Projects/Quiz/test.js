// let correctAnswers = [1,2,2,3,4,1,2,4,3,4]

// let selectedAnswers = [1,2,2,null,2]
let correctAnswers = [true,true,true,true,true,true,true]

let selectedAnswers = [true,true,true,null,false]

let cAnswer = 3
let wAnswer = 1
let noAnswer = 1

let answerSelected = false // se
let pos = 1
const prev = ()=>{
       
    if((selectedAnswers[pos] != correctAnswers[pos]) && (answerSelected == correctAnswers[pos])){
        cAnswer++
        selectedAnswers[pos] === null? noAnswer-- : wAnswer--
    }else if ((selectedAnswers[pos] == correctAnswers[pos]) && (answerSelected != correctAnswers[pos])){
        wAnswer++
        selectedAnswers[pos] === null? noAnswer-- : cAnswer--
        
    }
}
const next = ()=>{
    selectedAnswers.push(answerSelected)
    selectedAnswers[pos]==correctAnswers[pos] ? cAnswer++ : wAnswer--
}

if(pos < selectedAnswers.length){
    prev()
    selectedAnswers[pos] = answerSelected
}else{
    next()
    selectedAnswers[pos] = answerSelected
}
console.log(`Correct: ${cAnswer}    Wrong: ${wAnswer}   NotAttemped: ${noAnswer}`);
console.log(selectedAnswers);
