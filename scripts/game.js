const words = ["lebanon", "palestine", "beirut", "javascript", "styling"];
var selectedword = words[Math.floor(math.random()*words.length)];
var guessedLetters = [];
var remainingGuesses = 6;

const answerSection = document.getElementById("answer-section");
const hangElement = document.getElementById("hang");
const letters = document.querySelectorAll(".letter");

var displayedWord = "";

for (let i = 0; i < selectedWord.length; i++) {
    const letter = selectedWord[i];
    if (guessedLetters.includes(letter)) {
        displayedWord += letter; 
    } else {
        displayedWord += "_"; 
    }
}


//adding keyboard
 for (var i = 97; i <= 122; i++){
    const button = document.createElement("button");
    button.classList.add("letters");
    button.innerText=String.fromCharCode(i);
    Keyboard.appendChild(button)
 }
    

 function Guesses(event) {
    const letter = event.target.textContent.toLowerCase();

    if (guessedLetters.includes(letter)) 
        return;
    if (remainingGuesses <= 0) 
        return;

    guessedLetters.push(letter);

    if (selectedWord.includes(letter)) {
        displayWord(); 
    } else {
        remainingGuesses--; 
        updateHangman();    
    }

    event.target.classList.add("pressed");
}


