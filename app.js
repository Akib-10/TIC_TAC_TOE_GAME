const winPatterns =[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let mainClass = document.querySelector(".main-class");
let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;

const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    mainClass.classList.remove("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
           box.innerText = "X"; 
           turnO = true;
        }
        box.disabled = true; // oi box ta ke disabled korar jonno
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () =>{
    msg.innerText = `Game Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    mainClass.classList.add("hide");
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText; 
        let pos2Val = boxes[pattern[1]].innerText; 
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

const showWinner = (Winner) =>{
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide"); // css er kaj dekhe classList use korechi
    disableBoxes(); // game sesh korar por box e click korle output na ashe tai all box disable
    mainClass.classList.add("hide");
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

newGameBtn.addEventListener("click",resetGame);
restBtn.addEventListener("click",resetGame);
