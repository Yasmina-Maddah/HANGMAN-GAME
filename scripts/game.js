var words = ["lebanon", "palestine", "beirut", "road", "building"];


function anyword(array){
    return array[Math.floor(Math.random() * array.lrngth)]
};

var specificWord = anyword(words);
var guessedLetters = [];
var incorrectGuessesAlloved = 6;


var answerSection = document.getElementbyID("answer-section");
var hangElement = document.getElementById("hang");
var letters = document.getElementById(.letter);

//the word that is selected should appears as dashes

function wordAppears(){
    for (var letter of specificWord)
        if(guessedLetters.includes(letter)){
            wordAppears += letter
        } else {
            wordAppears += "_"
        }
  
}


