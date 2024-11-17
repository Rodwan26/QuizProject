const question = document.getElementById("question");
const nextbtn = document.getElementById("nextbtn"); 
const answers = document.getElementById("answers");
const questions = [
    {
        question : " Which is larget animal in the world?",
        answers: [
            { text:"Shark",correct: false},
            {text:"blue whale",correct:true},
            {text:"Girafe",correct:false},
            {text:"Elephent",correct:false},]},{
        question : " Which is larget country in Africa?",
        answers: [
            { text:"Algeria",correct: true},
            {text:"Nigeria",correct:false},
            {text:"Brizil",correct:false},
            {text:"France",correct:false},]},{
        question : " Which is  larget country in the world?",
        answers: [
            { text:"Egypt",correct: false},
            {text:"Chine",correct:false},
            {text:"USA",correct:false},
            {text:"Russia",correct:true}, ] },{
        question : " Which is fast animal in the world?",
        answers: [
            { text:"koala",correct: false},
            {text:"CaT",correct:false},
            {text:"Lion",correct:true},
            {text:"Human",correct:false},
        ]} ]

  let score ;
  let currentquestion;
  let questionIndex = 0;      
function start(){
    score = 0;
    questionIndex = 0;
    display();
}
       
function display(){
    resetState();
    nextbtn.style.display = "none";
 currentquestion = questions[questionIndex]; 
   let  questionNo= questionIndex + 1;
   question.innerHTML = questionNo +". " + currentquestion.question;
  
 let Answers = currentquestion.answers;
 Answers.forEach(answer =>{
    const  btn = document.createElement("button");
    btn.innerHTML= answer.text;
    btn.classList.add("btn");
    btn.innerHTML= answer.text;
    answers.appendChild(btn);
    if(answer.correct){
        btn.dataset.correct = answer.correct;
     }
    btn.addEventListener("click",selectbtn);

})
}
function selectbtn(e){
    const selectAnswer = e.target;
const iscorrect = selectAnswer.dataset.correct;
if(iscorrect){
    selectAnswer.classList.add("correct");
    score++;
}else{
    selectAnswer.classList.add("incorrect");
}
Array.from(answers.children).forEach( btn =>{

if(btn.dataset.correct ==="true"){
    btn.classList.add("correct");
}
btn.disabled="true";
})
  nextbtn.innerHTML = "Next";
 nextbtn.style.display="block";  
}
function resetState(){
    while(answers.firstChild){
        answers.removeChild(answers.firstChild);
    }
}
start();
nextbtn.addEventListener("click",()=>{
    if(questionIndex < questions.length){
     nextQuestion();
    }else{
start();
    }
})
function nextQuestion(){
    questionIndex++;
    if(questionIndex < questions.length){
  display();
    }else{
        Showscore();
    }
}
function Showscore(){
    answers.innerHTML = "";
    question.innerHTML = ` Your score is ${score} of ${questions.length}!`;
   nextbtn.innerHTML=`Play Again`;
  
}