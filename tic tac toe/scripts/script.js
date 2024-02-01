// declaring required variables
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset");
const newGameBtn = document.querySelector(".new");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector(".msg");
const sound = new Audio("./sound/move.mp3");
const cross = document.querySelector(".cross-line");

let control0 = true;
let count = 0;

// declaring winner pattern
const winPattern = [
  [0, 1, 2, 0, -22, 0],
  [0, 3, 6, -22, 0, 90],
  [0, 4, 8, 0, 0, 46],
  [1, 4, 7, 0, 0, 90],
  [2, 4, 6, 0, 0, 133],
  [2, 5, 8, 22, 0, 90],
  [3, 4, 5, 0, 0, 0],
  [6, 7, 8, 0, 22.6, 0],
];

//disable all box -> no click allowed
const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

//enable boxes to click
const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

//reset the game
const reSet = () => {
  control0 = true;
  count = 0;
  enableBox();
  msgContainer.classList.add("hide");
  cross.classList.add("hide");
};

//game draw
const gameDraw = () => {
  msg.innerText = "Game Draw";
  msgContainer.classList.remove("hide");
  disableBox();
};

//show the Winner
const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
};

//check the winner
const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    let transX = pattern[3];
    let transY = pattern[4];
    let rotate = pattern[5];
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        cross.style.transform = `translate(${transX}vmin, ${transY}vmin) rotate(${rotate}deg)`;
        cross.classList.remove("hide");
        showWinner(pos1Val);
      }
    }
  }
  return true;
};

// game inputs function
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    sound.play();
    if (control0) {
      box.innerText = "O";
      control0 = false;
    } else {
      box.innerText = "X";
      control0 = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

// new game or resetting name
newGameBtn.addEventListener("click", reSet);
resetBtn.addEventListener("click", reSet);
