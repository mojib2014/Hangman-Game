
var winCounter = 0;
var curtWord;
var numOfGuessesRem = 13;
var lettersAlrGuessed = [];
var wordList = ["word", "apple", "country", "orange", "computer", "screen", "dude", "people"];
var userWordBuild = "";


function startGame(){
    currentWord = wordList[0];
    for (var i = 0; i < currentWord.length; i++) {
        userWordBuild += "-";
        currWord.push(currentWord);
    }
    // debugger;
};

  document.onkeyup = function(event) {
  userGuess = event.key;
  console.log(userGuess);
    //   debugger;
    // console.log(currentWord);
    // console.log(userWordBuild);

        lettersAlrGuessed.push(userGuess);
    for (var i = 0; i < currentWord.length; i++) {
        //   console.log(currentWord[i])
        if(userGuess === currentWord[i]){
            winCounter++;
        }
        else {
            numOfGuessesRem--;
            
        }
        if (numOfGuessesRem === 0) {
          numOfGuessesRem = 13;

        }
      }
    


    var html = 
    "<p>Wins: " + winCounter + "<br></p" +
    "<p>Current Word: " +        + "<br></p>"+
    "<p>Number Of Guesses Remaining <br>" + numOfGuessesRem + "</p>" + 
    "<p>Letters Already Guessed:<br>" + lettersAlrGuessed + "</p>";
  
    document.querySelector("#hangmangame").innerHTML = html;    

    








};




startGame();