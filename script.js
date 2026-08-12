const questions = [
    {
        question: "Which language is used to create web pages?",
        options: ["HTML", "Python", "C", "Java"],
        answer: "HTML"
    },
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Control Processing User",
            "Central Program Unit"
        ],
        answer: "Central Processing Unit"
    },
    {
        question: "Which one is a programming language?",
        options: ["HTML", "CSS", "Java", "HTTP"],
        answer: "Java"
    },
    {
        question: "What does RAM stand for?",
        options: [
            "Random Access Memory",
            "Read Access Memory",
            "Run Access Machine",
            "Random Application Memory"
        ],
        answer: "Random Access Memory"
    },
    {
        question: "Which device is used to type text?",
        options: ["Monitor", "Keyboard", "Speaker", "Printer"],
        answer: "Keyboard"
    },
    {
        question: "Which is used to style web pages?",
        options: ["CSS", "Python", "C", "SQL"],
        answer: "CSS"
    },
    {
        question: "Which company developed Windows?",
        options: ["Google", "Microsoft", "Apple", "IBM"],
        answer: "Microsoft"
    },
    {
        question: "What is the brain of a computer?",
        options: ["CPU", "Mouse", "Keyboard", "Monitor"],
        answer: "CPU"
    },
    {
        question: "Which device displays information?",
        options: ["Monitor", "Mouse", "Keyboard", "Scanner"],
        answer: "Monitor"
    },
    {
        question: "Which one is an input device?",
        options: ["Keyboard", "Monitor", "Printer", "Speaker"],
        answer: "Keyboard"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextBtn");
const resultElement = document.getElementById("result");

function showQuestion() {

    const q = questions[currentQuestion];

    questionElement.textContent = q.question;
    optionsElement.innerHTML = "";

    q.options.forEach(function(option) {

        const button = document.createElement("button");

        button.textContent = option;

        button.onclick = function() {

            if (option === q.answer) {
                score++;
                button.style.backgroundColor = "lightgreen";
            } else {
                button.style.backgroundColor = "pink";
            }

            nextButton.style.display = "block";
        };

        optionsElement.appendChild(button);
        optionsElement.appendChild(document.createElement("br"));
    });
}

nextButton.onclick = function() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {

        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";
        nextButton.style.display = "none";

        resultElement.textContent =
            "Your Score: " + score + " / " + questions.length;
    }
};

showQuestion();