// grab UI elements
const selectedPlayer = document.getElementById("selected-player");
const players = document.getElementById("players");
const calculate = document.getElementById("calculate");
const playerExpenses = document.getElementById("player-expenses");

//Utiliti Function

//get input value from input field
function getInputValue(input) {
  const inputValue = parseInt(document.getElementById(input).value);
  return inputValue;
}

//Deligat #players section for get each button
players.addEventListener("click", (e) => {
  //Condition for Adding less than or equel five players

  if (e.target.tagName === "BUTTON") {
    const playersName = document.createElement("li");
    playersName.className = "playerName";
    selectedPlayer.appendChild(playersName);
    const playerNumber = document.querySelectorAll(".playerName");
    if(playerNumber.length <= 5){
      playersName.innerText =
      e.target.previousSibling.previousSibling.firstChild.nextSibling.innerText;
      const disabled = e.target;
      disabled.setAttribute('disabled', "")
      console.log(e.target)
    }else{
      alert(`You can't add more than 5 players`);
      selectedPlayer.removeChild(selectedPlayer.lastChild)
    }
  }
});

calculate.addEventListener("click", () => {
  const playerNumber = document.querySelectorAll(".playerName");
  const perPlayerCost = getInputValue("per-player");
  if(!isNaN(perPlayerCost)){
    playerExpenses.innerText = perPlayerCost * playerNumber.length;
  }else{
    alert(`Please insert a Number`)
  }
});
