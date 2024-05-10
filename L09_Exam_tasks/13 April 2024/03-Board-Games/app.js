const baseUrl = `http://localhost:3030/jsonstore/games/`;
 
const inputNameElement = document.getElementById("g-name");
const inputTypeElement = document.getElementById("type");
const inputPlayerElement = document.getElementById("players");
 
const buttonAddElement = document.getElementById("add-game");
const buttonEditElement = document.getElementById("edit-game");
const buttonLoadElement = document.getElementById("load-games");
 
const divGameListElement = document.getElementById("games-list");
 
buttonLoadElement.addEventListener("click", reloadAll);
buttonAddElement.addEventListener("click", newCourse);
buttonEditElement.addEventListener("click", editingCourse);
 
function editingCourse() {
  const { name, type, players } = inputObject();
  const _id = buttonEditElement.getAttribute("data-id");
  console.log(_id);
  fetch(baseUrl + _id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, type, players, _id }),
  }).then(() => {
    reloadAll();
  });
 
  clearInputs();
  buttonAddElement.disabled = false;
  buttonEditElement.disabled = true;
  buttonEditElement.removeAttribute("data-id");
}
 
function newCourse() {
  const gameObj = inputObject();
 
  if (!gameObj) {
    return;
  }
 
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gameObj),
  }).then(() => {
    reloadAll();
  });
 
  clearInputs();
}
 
function reloadAll() {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((games) => {
      divGameListElement.innerHTML = "";
 
      Object.values(games).forEach((game) => {
        createAndLoadElement(game);
      });
    });
}
 
function createAndLoadElement(game) {
  const buttonDeleteElement = document.createElement("button");
  buttonDeleteElement.classList.add("delete-btn");
  buttonDeleteElement.textContent = "Delete";
 
  const buttonChangeElement = document.createElement("button");
  buttonChangeElement.classList.add("change-btn");
  buttonChangeElement.textContent = "Change";
 
  const divButtonConteinerElement = document.createElement("div");
  divButtonConteinerElement.classList.add("buttons-container");
 
  divButtonConteinerElement.appendChild(buttonChangeElement);
  divButtonConteinerElement.appendChild(buttonDeleteElement);
 
  const pNameElement = document.createElement("p");
  pNameElement.textContent = game.name;
 
  const pTypeElement = document.createElement("p");
  pTypeElement.textContent = game.type;
 
  const pPlayersElement = document.createElement("p");
  pPlayersElement.textContent = game.players;
 
  const divContenElement = document.createElement("div");
  divContenElement.classList.add("content");
 
  divContenElement.appendChild(pNameElement);
  divContenElement.appendChild(pTypeElement);
  divContenElement.appendChild(pPlayersElement);
 
  const divCurenGameElement = document.createElement("div");
  divCurenGameElement.classList.add("board-game");
 
  divCurenGameElement.appendChild(divContenElement);
  divCurenGameElement.appendChild(divButtonConteinerElement);
  divGameListElement.appendChild(divCurenGameElement);
 
  buttonChangeElement.addEventListener("click", () => {
    divCurenGameElement.remove();
    populateInputs(game);
    buttonAddElement.disabled = true;
    buttonEditElement.disabled = false;
  });
 
  buttonDeleteElement.addEventListener("click", () => {
    fetch(baseUrl + game._id, {
      method: "DELETE",
    }).then(() => {
      reloadAll();
    });
  });
}
 
function clearInputs() {
  inputNameElement.value = "";
  inputTypeElement.value = "";
  inputPlayerElement.value = "";
}
 
function inputObject() {
  const name = inputNameElement.value;
  const type = inputTypeElement.value;
  const players = inputPlayerElement.value;
 
  if (!name || !type || !players) {
    return;
  }
 
  return { name, type, players };
}
 
function populateInputs(game) {
  inputNameElement.value = game.name;
  inputTypeElement.value = game.type;
  inputPlayerElement.value = game.players;
  buttonEditElement.setAttribute("data-id", game._id);
}