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

    console.log('Player Pressed', playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('You get a point');
        console.log('You have pressed correctly', expectedAlphabet);
        //    update score
        // 1.get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        console.log(currentScore);
        // 2.increase the score by 1
        const newScore = currentScore + 1;

        // show the update score
       currentScoreElement.innerText = newScore;


        // Start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else {
        console.log('you missed. you lost a life')
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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}