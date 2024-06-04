//Game constants
const playerScore = 0;
const computerScore = 0;
const computerValue = document.getElementById("computerValue");
const playerValue = document.getElementById("playerValue");
const options = ["Rock","Paper","Scissors"];
const statistics = document.getElementById("stats");
const whoScores = document.getElementById("currentScores");
const textAreaDetails = document.getElementById("details");


//clicking buttons for rock paper and scissors
function rock(){
    const userSelect = "Rock"
    statistics.classList.add("addstats");
    const computerSelect = options[Math.floor(Math.random()*3)];
    if(computerSelect===userSelect){
        whoScores.textContent = "It's a tie";
        let status = "It's a tie";
        scores(status);
        textAreaDetails.textContent = "You both chose Rock";
        playerValue.textContent = `Player Current Score ${playerScore}`;
        
    }
    else if(computerSelect==="Paper"){
        whoScores.textContent = "Computer Scores";
        textAreaDetails.textContent = "Paper beats Rock";
        let status = "Computer Scores";
        scores(status);

    }
    else if(computerSelect==="Scissors"){
        whoScores.textContent = "You Score";
        textAreaDetails.textContent = "Rock beats Scissors";
        let status = "You Score";
        scores(status);
                
    }
}
function paper(){
    statistics.classList.add("addstats");
    const computerSelect = options[Math.floor(Math.random()*3)];
    const userSelect = "Paper";
    if(computerSelect===userSelect){
        whoScores.textContent = "It's a tie";
        textAreaDetails.textContent = "You both chose Paper";
        let status = "It's a tie";
        scores(status);
}
    else if(computerSelect==="Scissors"){
        whoScores.textContent = "Computer Scores";
        textAreaDetails.textContent = "Scissors beats Paper";
        let status = "Computer Scores";
        scores(status);
        
    }
    else if(computerSelect==="Rock"){
        whoScores.textContent = "You Score";
        textAreaDetails.textContent = "Paper beats Rock";
        let status = "You Score";
        scores(status);
    }

}
function scissors(){
    statistics.classList.add("addstats");
    const computerSelect = options[Math.floor(Math.random()*3)];
    const userSelect = "Scissors";

    if(computerSelect===userSelect){
        whoScores.textContent = "It's a tie";
        textAreaDetails.textContent = "You both chose Scissors";
        let status = "It's a tie";
        scores(status);
    }
    else if(computerSelect==="Rock"){
        whoScores.textContent = "Computer Scores";
        textAreaDetails.textContent = "Rock beats Scissors";
        let status = "Computer Scores";
        scores(status);
        

    }
    else if(computerSelect==="Paper"){
        whoScores.textContent = "You Score";
        textAreaDetails.textContent = "Scissors beats Paper";
        let status = "You Score";
        scores(status);
    }
}

//Score Determiner
function scores(status){
    if (status === "It's a tie"){
        return null;
    }
    else if(status==="Computer Scores"){
        computerScore++;
        computerValue.innerHTML = `Computer Current Score ${computerScore}`;
        
    }
    else if(status==="You Score"){
        playerScore++;
        playerValue.innerHTML = `Player Current Score ${playerScore}`;
    }
}



//Other usefule buttons

//continue button
function proceed(){
    statistics.classList.remove("addstats");
}
//restart button
function restart(){
    statistics.classList.remove("addstats");
}
