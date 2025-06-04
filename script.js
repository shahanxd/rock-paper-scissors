console.log("Hello, world!");

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoiceIndex = Math.floor(choices.length * Math.random());
    console.log(choices[randomChoiceIndex]);
    return choices[randomChoiceIndex];
}

const scores = {
    human: 0,
    comp: 0
};
const playRound = (humanChoice) => {

    const compChoice = getComputerChoice();

    if (humanChoice === compChoice) {
        console.log("It's a tie!");
    }
    else if (
        (humanChoice === 'rock' && compChoice === 'scissors') ||
        (humanChoice === 'paper' && compChoice === 'rock') ||
        (humanChoice === 'scissors' && compChoice === 'paper')
    ) {
        console.log("You win!");
        scores.human++;
    } else {
        console.log("You lose!");
        scores.comp++;
    }
    updateScore();
}

const updateScore = () => {
    
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Human: ${scores.human} - Computer: ${scores.comp}`;

    if(scores.human >= 5 || scores.comp >= 5) {
        const winner = scores.human >= 5 ? 'Human' : 'Computer';
        alert(`${winner} won the game!`);
        scores.human = 0;
        scores.comp = 0;
        resultDiv.textContent = `Human: 0 - Computer: 0`;
    }
}

document.getElementById("rock").addEventListener("click", () => {
    playRound('rock');
})
document.getElementById("paper").addEventListener("click", () => {
    playRound('paper');
})
document.getElementById("scyther").addEventListener("click", () => {
    playRound('scissors');
})
