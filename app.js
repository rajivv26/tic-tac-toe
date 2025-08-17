//Selecting the elements from HTML
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container")

//Winning patterns
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]    
];

//Making the Turn
let turnX = true;

//Adding X, O when you click the buttons
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnX === true) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        };
        box.disabled = true;
        
        checkWinner();
    });
});

//Checking The Winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val !="" && pos3Val !="") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            };
        };
    };
};

//Show Winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner Is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
};

//Disable Buttons
const disabledBtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

//Enable Buttons
const enableBtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

//Reset Buttons
const resetGame = () => {
    turnX = true;
    enableBtn();
    msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);