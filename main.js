function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/bandeiras/icon=${player1}.svg" alt="bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/bandeiras/icon=${player2}.svg" alt="bandeira da ${player2}">
    </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay:${delay}s ">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard(
    "24/11",
    "quinta",
  createGame("brazil", "16:00", "serbia") +
  createGame("switzerland", "7:00", "cameroon")
) +
  createCard(
    "28/11",
    "segunda",
  createGame("switzerland", "13:00", "brazil") +
  createGame("cameroon", "7:00", "serbia")
) +
  createCard(
    "02/12",
    "sexta",
createGame("brazil", "16:00", "cameroon") +
createGame("serbia", "16:00", "switzerland")
)
