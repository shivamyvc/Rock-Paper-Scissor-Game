const userChoiceObj= document.querySelectorAll(".choice");
const userScore=document.getElementById("user-score");
const compScore=document.getElementById("comp-score");
const roundResult=document.getElementById("round-result");


const setUserScore=()=>{
    let userNewScore=Number(userScore.innerText);
    userNewScore+=1;
    userScore.innerText=userNewScore;

}

const setCompScore=()=>{
    let compNewScore=Number(compScore.innerText);
    compNewScore+=1;
    compScore.innerText=compNewScore;
}





const showWinner=(userSign)=>{
    let compChoice=getCompChoice();
    userWin=getWinner(userSign,compChoice);
    if(userWin==true){
        roundResult.innerText=`You Won! Computer choose ${compChoice}`;
        roundResult.style.background="green";
        setUserScore();
    }else if(userWin==="draw"){
        roundResult.innerText=`!!!!Game Draw!!!! Computer choose ${compChoice} \n Play Again`;
        roundResult.style.background="wheat";
        // console.log();
    }
    else{
        roundResult.innerText=`You Lost Computer choose ${compChoice} \n Play Again`;
        roundResult.style.background="red";
        setCompScore();
    }

}




const playGame=(userSign)=>{
    showWinner(userSign);
}

const getWinner=(userChoice,compChoice)=>{
    let userWin=true;
    if(userChoice===compChoice){
        userWin="draw";
    }else if(userChoice==='rock'){
        //paper ,scissor
        userWin= compChoice=="paper"?false:true;
    }else if(userChoice==="paper"){
        //rock,scissor
        userWin=compChoice=="scissor"?false:true;
    }else{
        //rock,paper
        userWin=compChoice=="rock"?false:true;

    }
    return userWin;
}


const getCompChoice=()=>{
    let compChoices=["rock","paper","scissor"];
    let choiceIdx=Math.floor(Math.random()*3);
    return compChoices[choiceIdx];
}


userChoiceObj.forEach((choice)=>{
    choice.addEventListener("click",(event)=>{
        userSign=choice.getAttribute("id");
        playGame(userSign);


    });
})


