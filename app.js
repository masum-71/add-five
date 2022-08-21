// grab UI elements
const selectedPlayer = document.getElementById("selected-player");
const players = document.getElementById("players");
const calculate = document.getElementById("calculate");


//Utiliti Function

function getInputValue(input){
  const inputValue =  parseInt(document.getElementById(input).value);
  return inputValue;
}

//Deligat #players section for get each button
players.addEventListener("click", (e) => {
  //Condition for Adding less than or equel five players

  if (e.target.tagName === "BUTTON") {
    //Create li and append in ol
    const playersName = document.createElement("li");
    playersName.className = "playerName";
    selectedPlayer.appendChild(playersName);
    const playerName = document.querySelectorAll("li");
    if(playerName.length <=5){
        playersName.innerText = e.target.previousSibling.previousSibling.firstChild.nextSibling.innerText;
    }else{
        alert(`You can't add more than 5 players`)
    }
  }
});

 
calculate.addEventListener('click', ()=>{
    console.log(getInputValue('per-player'))
})
