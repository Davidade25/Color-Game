const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#FFC333'];  
let score = 0;  
let targetColor;  

const colorBox = document.getElementById('colorBox');  
const colorOptionsContainer = document.getElementById('colorOptions');  
const gameStatus = document.getElementById('gameStatus');  
const scoreDisplay = document.getElementById('score');  
const newGameButton = document.getElementById('newGameButton');  
  
function startNewGame() {  
    targetColor = colors[Math.floor(Math.random() * colors.length)];  
    colorBox.style.backgroundColor = targetColor;  
    colorOptionsContainer.innerHTML = '';  
    gameStatus.textContent = 'Make your guess!';  
    createColorOptions();  
}  
 
function createColorOptions() {  
    const shuffledColors = colors.sort(() => 0.5 - Math.random());  
    shuffledColors.forEach(color => {  
        const button = document.createElement('div');  
        button.className = 'color-option';  
        button.style.backgroundColor = color;  
        button.setAttribute('data-testid', 'colorOption');  
        button.addEventListener('click', () => checkGuess(color));  
        colorOptionsContainer.appendChild(button);  
    });  
}  
 
function checkGuess(color) {  
    if (color === targetColor) {  
        score++;  
        scoreDisplay.textContent = `Score: ${score}`;  
        gameStatus.textContent = 'Correct! 🎉';  
        gameStatus.classList.add('correct');  
    } else {  
        score = 0;  // Reset the score on a wrong guess
        scoreDisplay.textContent = `Score: ${score}`;  
        gameStatus.textContent = 'Wrong! Try again.';  
        gameStatus.classList.add('wrong');  
    }  
    disableButtons();  
    setTimeout(() => {  
        gameStatus.classList.remove('correct', 'wrong');  
        startNewGame();  
    }, 1000);  
}  
  
function disableButtons() {  
    const buttons = document.querySelectorAll('.color-option');  
    buttons.forEach(button => {  
        button.style.pointerEvents = 'none';  
    });  
}  
  
newGameButton.addEventListener('click', () => {  
    score = 0;  
    scoreDisplay.textContent = `Score: ${score}`;  
    startNewGame();  
});  

startNewGame();
