// function play(){
// //step-1: hide the home screen . to hide the screen add the  class hidden to home section
//   const homeSection = document.getElementById('home-screen');
// //   console.log(homeSection.classList);
//   homeSection.classList.add('hidden');

// // show the playground
//   const playGroundSection = document.getElementById('play-ground');
// //   console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('Player pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }


    console.log('Player Pressed', playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('You get a point');
        // console.log('You have pressed correctly', expectedAlphabet);
           
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
       



        // ---------------------------------------------
        //    update score
        // 1.get the current score
        //    const currentScoreElement = document.getElementById('current-score');
        //     const currentScoreText = currentScoreElement.innerText;
        //     const currentScore = parseInt(currentScoreText);
        //     console.log(currentScore);
        // const currentScore = getTextElementValueById('current-score');


        //     // 2.increase the score by 1
            const newScore = currentScore + 1;

        //     // show the update score
        //    currentScoreElement.innerText = newScore;


        // Start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else {
        console.log('you missed. you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
           gameOver();
        }
             






        // --------------------------------------
        // step-1 get the current life number 
        /* const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
      // step-2 reduce the life count
       const newLife = currentLife - 1;

      // step-3 display the updated life count
      currentLifeElement.innerText = newLife; */
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    // step-1: generate random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet', alphabet);

    // set randomly alphabet to the screen (show it);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColor(alphabet);



}

function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
     hideElementById('play-ground');
     showElementById('final-score');
    //  update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    // clear the last selected highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}