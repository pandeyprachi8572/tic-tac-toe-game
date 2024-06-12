let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector('#new-btn');
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn=true;//playerx playery
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn){//player o
            box.innerText="o";
            turn=false;
        }
            else{//player x
box.innerText="x";
turn=true;
            }
            box.disabled=true;
            check();
        
    })
    
});
const disabledbox=()=>{
    for(let box of boxes){
        box.disabled=true
;    }
}

const enabledbox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
;    }
}
const showWinner=(winner)=>{
    msg.innerHTML=`Congratulation , Winner is ${winner}`;
    msgcontainer.classList.remove("g");
    disabledbox();
}
const check=()=>{
    for(let pattern of winpatterns){
let pos1val=boxes[pattern[0]].innerText;
let pos2val=boxes[pattern[1]].innerText;
let pos3val=boxes[pattern[2]].innerText;
if(pos1val!="" && pos2val!=""&&pos3val!="" ){
    if(pos1val===pos2val && pos2val===pos3val){
        console.log("winner",pos1val);
        showWinner(pos1val);
    }
}
    }
};
const resetGame=()=>{
    turn=true
enabledbox();
msgcontainer.classList.add("g");
};
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);