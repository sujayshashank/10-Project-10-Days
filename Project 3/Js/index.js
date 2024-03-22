const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'None of these',
        'correct': 'a'
    },

{
    'que': 'What year was JavaScript lunched?',
    'a': '1996',
    'b': '1982',
    'c': '1965',
    'd': 'None of these',
    'correct': 'b'
},

{
    'que': 'What does CSS stands for?',
    'a': 'Hyber Text Markup Language',
    'b': 'Cascadiya Style Sheet',
    'c': 'Cascading Style Sheet',
    'd': 'Jason object Notation',
    'correct': 'c'
}];

let index = 0;
let total = questions.length;
let right = 0, 
    wrong = 0;
const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;


}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let ans;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                console.log("Yes");
                ans = input.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
        
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = 
    `<div style="text-align:center">
    <h3>Thank You For Playing The Quiz</h3>
    <h2>${right} / ${total} are Correct </h2>
    </div>`
}

// This is intial call 
loadQuestion();

