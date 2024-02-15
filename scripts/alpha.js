// function play() {
//     // console.log('play now')
//     const homeScreen = document.getElementById('home-screen');
//     // console.log(homeScreen.classList);
//     homeScreen.classList.add('hidden');

//     // playground
//     const playgroundSection=document.getElementById('play-ground');
//     // console.log(playgroundSection.classList);
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if (playerPressed === 'Escape') {
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');

    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if (playerPressed === expectedAlphabet) {
        // console.log('you get a point!')

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)



        // ----------------------
        // update score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // increase the score by 1
        // const newScore = currentScore + 1;
        // // show the update score
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log('you missed.you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            // console.log('game over')
            gameOver();
        }



        // -------------------------------------
        // get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // reduce the life count
        // const newLife = currentLife - 1;
        // // display the update life count
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet:', alphabet)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorId(alphabet);
}

function play() {
    // hide everything,show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last alphabet color

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}