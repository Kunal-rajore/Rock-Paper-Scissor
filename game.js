let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");

const msg = document.querySelector(".msg");

let you = document.querySelector("#you");
let comp = document.querySelector("#comp");

let msg2 = document.querySelector(".Restart");

msg2.addEventListener("click",()=>{
     you.innerText = "0";
     comp.innerText = "0";
     msg.innerText = "Play Your Move";
     msg.style.background = "#19B5FE"
})

const drawGame = () => {
  console.log("game was draw!");
  msg.innerText = "Game Was Draw! Play Again";
  msg.style.background = "#19B5FE";
};

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    you.innerText = userscore;
    msg.innerText = `congratulations,You Win`;
    msg.style.background = "green";
  } else {
    compscore++;
    comp.innerText = compscore;
    msg.innerText = `You Lost!`;
    msg.style.background = "red";
  }
};

const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const opidx = Math.floor(Math.random() * 3);
  return options[opidx];
};
const playgame = (userchoice) => {
  console.log("user choice =", userchoice);

  let compchoice = gencompchoice();
  console.log("computer choice = ", compchoice);

  if (userchoice === compchoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      //paper,scissor;
      userwin = compchoice === "papar" ? false : true;
    } else if (userchoice === "paper") {
      //rock,scissor;
      userwin = compchoice === "scissor" ? false : true;
    } else {
      //rock,paper;
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});

console.log(choices);
