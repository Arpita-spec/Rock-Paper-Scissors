// Getting elements from the DOM
let userScore = 0;
let compScore = 0;
const userElement = document.getElementById("user-score");
const compElement = document.getElementById("comp-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const msg = document.getElementById("msg");

// Function for computer choice
function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return "draw";
    }
    if ((userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")) {
        return "user";
    }
    return "comp";
}

// Function to update the score and display messages
function updateScore(winner) {
    if (winner === "user") {
        userScore++;
        msg.textContent += " Great job! You win.";
        msg.style.backgroundColor = "blue";
        userElement.textContent = userScore;
    } else if (winner === "comp") {
        compScore++;
        msg.textContent += " Oops! Computer wins.";
        msg.style.backgroundColor = "green";
        compElement.textContent = compScore;
    } else {
        msg.textContent += " It is a draw.";
        msg.style.backgroundColor = "red";
    }
}

// Function for handling user choice
function handleUserChoice(choice) {
    const compChoice = computerChoice();
    const winner = determineWinner(choice, compChoice);
    msg.textContent = `Computer chose ${compChoice}.`; // Update message to show computer's choice
    updateScore(winner);
}

// Adding event listeners
rock.addEventListener("click", () => handleUserChoice("rock"));
paper.addEventListener("click", () => handleUserChoice("paper"));
scissors.addEventListener("click", () => handleUserChoice("scissors"));
