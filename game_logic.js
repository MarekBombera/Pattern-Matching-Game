
import {addsClickEffect, flashesColors} from '/game_effects.js'
import {colorArr, colorGeneratorArr} from '/global_variables.js'

const modalCloseButton = document.querySelector('#modal-close-button');
const lostGameModal = document.querySelector('.lost-game-modal');
const resetButton = document.querySelector('#reset-game-button');
const startButton = document.querySelector('#start-button');
const levelSpan = document.querySelector('.level-span');
const scoreLose = document.querySelector('#score-lose');
const scoreWin = document.querySelector('#score-win');
const cube = document.querySelectorAll('.cube');

let difficultyArr = [1,2,3,4,5,6,7,8,9,10];
let colorMatchArr = [];
let colorClickMatchArr = [];
let resultEvaluationArr = [];
let scoreWinCount = 0;
let scoreLoseCount = 0;
let lockStartButton = false;
let lockClicking = true;

const startsGame = (keyPressEvent) => {
    if (lockStartButton) {
        return
    }
    if (keyPressEvent.code === 'Space' || keyPressEvent.type === 'click') {
        lockStartButton = true;
        
        randomPatternGenerator()
        setsColorInterval();
    }
}

const randomPatternGenerator = () => {
    for (let i = 0; i < difficultyArr[0]; i++){
        const number = Math.floor(Math.random() * 4);
        colorGeneratorArr.push(colorArr[number]);
        colorMatchArr.push(colorArr[number]);
    }
    
    difficultyArr.shift();
}  

const setsColorInterval = () => {
    let colorInterval = setInterval(() => {
        if (colorGeneratorArr.length === 0) {
            lockClicking = false;
            clearInterval(colorInterval);
        }

        flashesColors();
    }, 800)
}

const colorClick = (click) => {
    if (lockClicking) {
        return
    }

    colorClickMatchArr.push(click.target);

    addsClickEffect(click);
    evaluatesPlayersAnswers();
}

const evaluatesPlayersAnswers = () => {
    if (colorMatchArr.length === colorClickMatchArr.length) {
        for (let i in colorMatchArr) {
            if (colorMatchArr[i] === colorClickMatchArr[i]) {
                resultEvaluationArr.push(true);
            }
            else if (colorMatchArr[i] !== colorClickMatchArr[i]) {
                resultEvaluationArr.push(false);
            }
        }

        checksForWinLoss();
    }
}

const checksForWinLoss = () => {
    let checkResult = resultEvaluationArr.every(result => {return result === true});

    if (checkResult === true) {
        scoreWinCount += 1;
        scoreWin.textContent = scoreWinCount;
        levelSpan.textContent = `Level ${difficultyArr[0]}`;
        colorMatchArr = [];
        colorClickMatchArr = [];
        lockStartButton = false;
        lockClicking = true;
        wonGame();
    }
    else {
        scoreLoseCount += 1;
        scoreLose.textContent = scoreLoseCount;
        colorClickMatchArr = [];
        lostGame();
    }

    resultEvaluationArr = [];
}

const wonGame = () => {
    if (scoreWinCount === 10) {
        levelSpan.textContent = `GG EZ!`;
        resetButton.style.display = 'block';
    }
}

const lostGame = () => {
    if (scoreLoseCount === 3) {
        lostGameModal.classList.remove('modal-off');
        lostGameModal.classList.add('modal-on');
        lockStartButton = true;
        lockClicking = true;
    }
}

const resetsGame = () => {
    difficultyArr = [1,2,3,4,5,6,7,8,9,10];
    colorMatchArr = [];
    colorClickMatchArr = [];
    scoreWinCount = 0;
    scoreLoseCount = 0;
    scoreWin.textContent = scoreWinCount;
    scoreLose.textContent = scoreLoseCount;
    levelSpan.textContent = `Level ${difficultyArr[0]}`;
    lockStartButton = false;
    lockClicking = true;
    lostGameModal.classList.remove('modal-on');
    lostGameModal.classList.add('modal-off');
    resetButton.style.display = 'none';
}

cube.forEach(click => click.addEventListener('click', colorClick));
modalCloseButton.addEventListener('click', resetsGame);
startButton.addEventListener('click', startsGame);
resetButton.addEventListener('click', resetsGame);
window.addEventListener('keydown', startsGame);


