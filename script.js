console.log("Hello, world!");

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoiceIndex = Math.floor(choices.length * Math.random());
    console.log(choices[randomChoiceIndex]);
    return choices[randomChoiceIndex];
}

const getHumanChoice = () => {
    const HumanChoice = prompt("Please enter your choice: rock, paper, or scissors");
    console.log(HumanChoice);
    return HumanChoice;
}

const scores = {
    human: 0,
    comp: 0
};
const  playRound = (scores) => {
    const  humanChoice = getHumanChoice();
    const  compChoice = getComputerChoice();

    if(humanChoice === compChoice) {
        console.log("It's a tie!");
    }
    else if(
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
}

const playGame = (rounds) => {
    for(let i  = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}`);
        playRound(scores);
    }
    console.log(`Final Score - Human: ${scores.human}, Computer: ${scores.comp}`);
    scores.human = 0;
    scores.comp = 0;
}

playGame(5);