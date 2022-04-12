let readline = require("readline-sync")




function showFinalScore(score) {
    console.log(`your final score: ${score}/5\n`)
}

function checkUserAnswer(actualAnswer, userAnswer) {
    if (userAnswer.toLowerCase() == actualAnswer.toLowerCase()) {
        console.log("Hurray! you got that right")
        return 1;


    }
    else {
        console.log("oops thats wrong")
        return 0;
    }
}



function gamePlay() {

    let score = 0;

    for (i of questions) {

        let userAnswer = readline.question(i["question"] + "\n")
        score += checkUserAnswer(i["answer"], userAnswer)
        console.log(`current score: ${score}\n`)


    }
    showFinalScore(score);
}


function welcome() {
    let userName = readline.question("what is your name" + "\n")
    console.log(`welcom ${userName} to cricket quiz \n`);

}


let questions = [
    {
        question: "what is the highest score of rohit sharma in ODI",
        answer: "264"
    },
    {
        question: "who has best test average apart from bradman for a minimum of 5000 runs",
        answer: "steve smith"
    },
    {
        question: "how many championships won by csk and mi",
        answer: "9"
    },
    {
        question: "who took 10/10 wickets in an innings of a test match recently",
        answer: "ajaz patel"
    },
    {
        question: "how many times csk has qualified for ipl playoffs",
        answer: "12"
    }
]


welcome()
gamePlay()
