$(document).ready(function () {

    var currentQuestion;
    var correctAnswer;
    var wrongAnswer;
    var unanswered;
    var answered;
    var seconds;
    var time;
    var userChoice;
    var currentChoices;

});

var text = {
    correct: "That is correct, well done!",
    wrong: "Sorry, that is not correct!",
    timeOut: "Sorry, you are out of time",

};



var triviaQ = [

    {

        question: "Which of the following functions of Number object would return a string version of the number that may change according to the browser's locale settings?",
        choices: ["toFixed()", "toExponential()", "toString()", "toLocaleString()"],
        correct: 3,

    },

    {
        question: "What is the function of Array object that runs through each element of the array?",
        choices: ["concat()", "filter()", "forEach()", "every()"],
        correct: 2,

    },

    {
        question: "What is the function for creating a prompt box?",
        choices: ["alert()", "prompt()", "confirm()", "document.ask()"],
        correct: 1,
    },

    {
        question: "Which of following events is not a valid event?",
        choices: ["onLoad", "onUnload", "onClick", "onMouseover", "onLinkClick"],
        Correct: 4,

    },
    {
        question: "What company developed the scritping language JavaScript?",
        choices: ["Sun Microsystems", "Microsoft", "Apple", "Mozilla", "Netscape"],
        correct: 4,

    },
    {
        question: "In the following code snippet, what value is given for the left margin? Margin: 5px,10px,3px,8px",
        choices: ["3px", "10px", "8px", "5px"],
        correct: 2,

    },

    {
        question: "What is the correct CSS syntax for making all the <p> tag's font size 14px?",
        choices: ["p{14px}", "p{font-size: 14px}", "p{text-size: 14px;}", "p{font: 14px;"],
        correct: 1,

    },
    {
        question: "How do you insert padding so that it is: 10 pixels at the top, 15 pixels at the bottom, 5 pixels at the right, and 10 pixels to the left?",
        choices: ["padding:10px 15px 5px 10px", "padding: 15px 5px 10px 10px", "padding: 10px 5px 10px 15px", "padding: 10px 5px 15px 10px"],
        correct: 3,
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        choices: ["text-transform: capitalize", "text-transform: uppercase", "you cannot do that with CSS", "text: capitalize"],
        correct: 0,
    },

    {
        question: "What is the correct CSS syntax to change the font name?",
        choices: ["font-name:", "font:", "font-family:", "fontname:"],
        correct: 2,
    },

    {
        question: "What is used for alternately expanding and collapsing a page element?",
        choices: [".hover()", "stopPropagation()", ".toggle()", ".trigger()"],
        correct: 3,

    },

    {
        question: "What method acts on JQuery objects and translates the match DOM element into a query string that can be passed along with AJAX requests?",
        choices: [".serialize()", ".serializeAll()", ".synchronized()", "none of these"],
        correct: 0,
    },

    {
        question: "Jquery is a library for what type of scripting?",
        choices: ["Client", "Server", "both client and server", "none of these"],
        correct: 0,
    },
    {
        question: "What method works for accepting an array of DOM elements and pushes them into a stack?",
        choices: [".push()", ".pop()", "pushStack()", "popStack()"],
        correct: 2,
    },

    {
        question: "What does AHAH mean?",
        choices: ["Asynchronous HTTP and HTML", "Asynchronous HTTP and HTTPs", "Alternate HTTP and HTML", "None of these"],
        correct: 0,
    },

    {
        question: "Which tag is used to specify an inline fram?",
        choices: ["<jframe>", "<frameset>", "<iframe>", "<frame>"],
        correct: 3,
    },

    {
        question: "Which tag is used to specify an inline fram?",
        choices: ["<jframe>", "<frameset>", "<iframe>", "<frame>"],
        correct: 3,
    },

    {
        question: "What does DOM stand for?",
        choices: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Data Oriented Model"],
        correct: 1,
    },


    {
        question: "HTML is based on which language?",
        choices: ["XHTML", "XML", "SGML", "DTD"],
        correct: 2,
    },


    {
        question: "What is the Ancestor of all other elements on the page?",
        choices: ["Parent", "Ancestor", "Root Element", "Siblings"],
        correct: 3,
    },

    {
        question: "If background image is smaller than the screen, what will happen?",
        choices: ["It will be stretched", "It will be repeated", "It will leave a blank space at the bottom of the page", "None of these"],
        correct: 1,
    },


];
console.log(triviaQ)

$("#beginGame").on("click", function () {
console.log("working")
    newGame();
});

function newGame() {
    $("#correctAnswers").hide();
    correctAnswer = 0;
    wrongAnswer = 0;
    unanswered = 0;
    currentQuestion = 0;
    questions();
    $("#beginGame").hide();


};

function questions() {

    $("#correctAnswers").hide();
    $("#questions").show();
    answered = true;
    $(".Q").html("<p>" + triviaQ[currentQuestion].question + "</p>");
    for (var i = 0; i < triviaQ[currentQuestion].choices.length; i++){
        $(".Q").append(`<button class = 'answerButton' data-name = '${triviaQ[currentQuestion].choices[i]}' >${triviaQ[currentQuestion].choices[i]}</button>`)
        
    }
    currentQuestion ++;
};



console.log('questions');