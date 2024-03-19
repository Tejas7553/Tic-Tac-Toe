let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true; //playerO
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


//step-6
const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");

}

const drawGame = () => {
  msg.innerText = ` Game was a Draw. `;
  msgContainer.classList.remove("hide");
  disableBoxes();
}


//step-5
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""; 
    }
}

//step-4
const disableBoxes = () => {
     for(let box of boxes){
        box.disabled = true;
     }
};

//step-3
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

//step-2
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    //winner chi condition
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner " + pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

//step-1 
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      // box.classList.add("player-x");
      turn0 = false;  //choice will go to next 2nd member
    } else {
      box.innerText = "X";
      // box.classList.add("player-o");
      turn0 = true;
    }
    box.disabled = true; //to stop overwrite
    count++;

    let isWinneer = checkWinner();

    if(count === 9 && !isWinneer){
        drawGame();
    }
  });
});

//step-7
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);