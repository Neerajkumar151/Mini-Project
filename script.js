//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 31;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "Easy Level:-  Inside which HTML element do we put the JavaScript?",
        options: ["script tag", "javascript tag", "scripting tag", "js tag",],
        correct: "script tag",
    },
    {
        id: "1",
        question: " Easy Level:-  Where is the correct place to insert a JavaScript?",
        options: ["head section","body section","Both head and body tag","title tag",],
        correct: "Both head and body tag",
    },
    {
        id: "2",
        question: " Easy Level:-  What is the full form of CSS?",
        options: ["Cascading Style Sheets","Cascading Style Sheet","Copy Style Sheets","Cool Style Sheets"],
        correct: "Cascading Style Sheets",
    },
    {
        id: "3",
        question: " Easy Level:-  The external JavaScript file must contain the &lt;script&gt; tag.",
        options: ["True","False"],
        correct: "False",
    },
    {
        id: "4",
        question: "Medium Level:-  Which of the following can read and render HTML web pages",
        options: ["server","head tak","web browser","empty",],
        correct: "web browser",
    },
    {
        id: "5",
        question: " Easy Level:-  Which HTML tag is used to create a hyperlink?",
        options: ["link tag","anchor tag","href tag","hyperlink tag",],
        correct: "anchor tag",
    }, 
    {
        id: "6",
        question: " Easy Level:-  What does HTML stand for?",
        options: ["Hyper Transfer Markup Language","Hyper Text Makeup Language","HyperText Markup Language","High-Level Text Language",],
        correct: "HyperText Markup Language",
    },
    {
        id: "7",
        question: " Easy Level:-  What is the purpose of CSS?",
        options: ["To create dynamic web pages","To add interactivity to a website","To style and layout web pages","To handle server-side scripting",],
        correct: "To style and layout web pages",
    },
    {
        id: "8",
        question: " Easy Level:-  Which CSS property is used to change the text color?",
        options: ["color","text-color","font-color","textColor",],
        correct: "color",
    },
    {
        id: "9",
        question: " Medium Level:-  What type of programming language is JavaScript?",
        options: ["Compiled language","Interpreted language","Assembly language","Machine language",],
        correct: "Interpreted language",
    },
    {
        id: "10",
        question: "Medium Level:-  Which one of the following is an application of Stack Data Structure?",
        options: ["Managing function calls","The stock span problem","Arithmetic expression evaluation","All",],
        correct: "All",
    },
    {
        id: "11",
        question: "Medium Level:-  Which one of the following is an application of Queue Data Structure?",
        options: ["When a resource is shared among multiple consumers.","When data is transferred asynchronously (data not necessarily received at same rate as sent) between two processes","Load Balancing","All",],
        correct: "All",
    },
    {
        id: "12",
        question: "Hard Level:-  Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
        options: ["Insertion Sort","Quick Sort","Heap Sort","Merge Sort",],
        correct: "Merge Sort",
    },
    {
        id: "13",
        question: "Medium Level:-  Which of the following is true about linked list implementation of stack?",
        options: ["In push operation, if new nodes are inserted at the beginning of linked list, then in pop operation, nodes must be removed from end.","In push operation, if new nodes are inserted at the end, then in pop operation, nodes must be removed from the beginning.","Both of the above","None of the above",],
        correct: "None of the above",
    },
    {
        id: "14",
        question: "Medium Level:-  Which of the following is an advantage of adjacency list representation over adjacency matrix representation of a graph?",
        options: ["In adjacency list representation, space is saved for sparse graphs.","DFS and BSF can be done in O(V + E) time for adjacency list representation. These operations take O(V^2) time in adjacency matrix representation. Here is V and E are number of vertices and edges respectively.","Adding a vertex in adjacency list representation is easier than adjacency matrix representation.","All",],
        correct: "All",
    },
    {
        id: "15",
        question: "Hard Level:-  Suppose a circular queue of capacity (n – 1) elements is implemented with an array of n elements. Assume that the insertion and deletion operation are carried out using REAR and FRONT as array index variables, respectively. Initially, REAR = FRONT = 0. The conditions to detect queue full and queue empty are",
        options: ["Full: (REAR+1) mod n == FRONT, empty: REAR == FRONT","Full: (REAR+1) mod n == FRONT, empty: (FRONT+1) mod n == REAR","Full: REAR == FRONT, empty: (REAR+1) mod n == FRONT","Full: (FRONT+1) mod n == REAR, empty: REAR == FRONT",],
        correct: "Full: (REAR+1) mod n == FRONT, empty: REAR == FRONT",
    },
    {
        id: "16",
        question: "Medium Level:-  A program P reads in 500 integers in the range [0..100] representing the scores of 500 students. It then prints the frequency of each score above 50. What would be the best way for P to store the frequencies?",
        options: ["An array of 50 numbers", "An array of 100 numbers", "An array of 500 numbers", "A dynamically allocated array of 550 numbers",],
        correct: "An array of 50 numbers",
    },
    {
        id: "17",
        question: "Hard Level:-  Suppose the numbers 7, 5, 1, 8, 3, 6, 0, 9, 4, 2 are inserted in that order into an initially empty binary search tree. The binary search tree uses the usual ordering on natural numbers. What is the in-order traversal sequence of the resultant tree?",
        options: ["7 5 1 0 3 2 4 6 8 9","0 2 4 3 1 6 5 9 8 7","0 1 2 3 4 5 6 7 8 9","9 8 6 4 2 3 0 1 5 7",],
        correct: "0 1 2 3 4 5 6 7 8 9",
    },
    {
        id: "18",
        question: "Easy Level:- In the worst case, the number of comparisons needed to search a singly linked list of length n for a given element is (GATE CS 2002)",
        options: ["log(2*n)","n/2","log(2*n) -1","n",],
        correct: "n",
    },
    {
        id: "19",
        question: "Medium Level:-  What is the time complexity of Build Heap operation?(Build Heap is used to build a max(or min) binary heap from a given array. Build Heap is used in Heap Sort as a first step for sorting.)",
        options: ["O(nLogn)","O(n^2)","O(n)","O(logn)",],
        correct: "O(n)",
    },
    {
        id: "20",
        question: "Hard Level:-  Suppose we are sorting an array of eight integers using heapsort, and we have just finished some heapify (either maxheapify or minheapify) operations. The array now looks like this: 16 14 15 10 12 27 28 How many heapify operations have been performed on root of heap?",
        options: ["1","2","3 or 4","5 or 6",],
        correct: "2",
    },
    {
        id: "21",
        question: "Medium Level:-  A min- Heap is a complete binary tree.",
        options: ["True","False",],
        correct: "True",
    },
    {
        id: "22",
        question: "Hard Level:-  Consider a standard Circular Queue 'q' implementation (which has the same condition for Queue Full and Queue Empty) whose size is 11 and the elements of the queue are q[0], q[1], q[2].....,q[10]. The front and rear pointers are initialized to point at q[2] . In which position will the ninth element be added?",
        options: ["q[0]","q[1]","q[9]","q[10]",],
        correct: "q[0]",
    },
    {
        id: "23",
        question: "Medium Level:-  A linear list of elements in which deletion can be done from one end (front) and insertion can take place only at the other end (rear) is known as _____________",
        options: ["Queue","Stack","Tree","Linked list",],
        correct: "Queue",
    },
    {
        id: "24",
        question: "Medium Level:-  A queue follows __________",
        options: ["FIFO (First In First Out) principle","LIFO (Last In First Out) principle","Ordered array","Linear tree",],
        correct: "FIFO (First In First Out) principle",
    },
];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 31;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 31;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};