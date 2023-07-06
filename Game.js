let result=document.getElementById("result")
let hands=document.getElementById("hands")
let comp_choice
let score=0

document.getElementById("rock_button").onclick=function(){
    computer(0)
}
document.getElementById("paper_button").onclick=function(){
    computer(1)
}
document.getElementById("scissor_button").onclick=function(){
    computer(2)
}

function computer(user_choice){
    comp_choice=Math.floor(Math.random()*3)
    if(comp_choice==0){
        if(user_choice==1){
            result.innerText="You Win"
            score++
        }
        else if(user_choice==2){
            result.innerText="You lose"
            score--
        }
        else{
            result.innerText="Draw"
        }
        hands.innerText="Computer choose Rock"
    }
    if(comp_choice==1){
        if(user_choice==2){
            result.innerText="You Win"
            score++
        }
        else if(user_choice==0){
            result.innerText="You lose"
            score--
        }
        else{
            result.innerText="Draw"
        }
        hands.innerText="Computer choose Paper"
    }
    if(comp_choice==2){
        if(user_choice==0){
            result.innerText="You Win"
            score++
        }
        else if(user_choice==1){
            result.innerText="You lose"
            score--
        }
        else{
            result.innerText="Draw"
        }
        hands.innerText="Computer choose scissors"
    }
    document.getElementById("player-score").innerText=score
}

document.getElementById("endGameButton").onclick=function(){
    score=0
    result.innerText=""
    hands.innerText=""
    document.getElementById("player-score").innerText=""
}