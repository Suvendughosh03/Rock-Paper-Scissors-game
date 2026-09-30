let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#computer-score");
 
const drawGame = () => {
    msg.innerText = "Game was Draw, Play Again.";
    msg.style.backgroundColor ="#081b31"
}
const genComputerChoise = () => {
    const option = ["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];

}

const showWinner = (userWin, userchoice,compchoice) => {
    if(userWin) {
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = (`Congratulations,You Are Win!Your ${userchoice} beats ${compchoice}`);
        msg.style.backgroundColor ="green";
    }else{
        computerscore++;
        compscorePara.innerText = computerscore;
        msg.innerText = (`So Sad, You Lose.${compchoice} beats your ${userchoice}`);
        msg.style.backgroundColor ="red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const compchoice = genComputerChoise();
    console.log("Computer Choice = ", compchoice);

    if(userchoice === compchoice) {
        drawGame();
    }else{
    
        let userWin = true;
        if(userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper") {
            userWin = compchoice == "scissors" ? false : true;
        }else{
            userWin = compchoice == "rock" ? false : true;
        }

        showWinner(userWin, userchoice, compchoice);

    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});