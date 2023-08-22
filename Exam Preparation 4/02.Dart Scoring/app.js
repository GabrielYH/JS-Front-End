window.addEventListener("load", solve);

function solve() {
  const form = document.querySelector("#scoring-content");
  const nameInput = document.querySelector("#player");
  const scoreInput = document.querySelector("#score");
  const roundInput = document.querySelector("#round");

  const addButton = document.querySelector("#add-btn");
  addButton.addEventListener(`click`, addScore);

  const clearButton = document.querySelector(".btn.clear");
  clearButton.addEventListener(`click`, clearBoard);

  const sureList = document.querySelector("#sure-list");

  const scoreBoardUl = document.querySelector("#scoreboard-list");

  function addScore() {
    if (
      nameInput.value === "" ||
      scoreInput.value === "" ||
      roundInput.value === ""
    ) {
      nameInput.value = "";
      scoreInput.value = "";
      roundInput.value = "";
      alert("Please fill all forms!");
      return;
    }

    const createdLi = document.createElement("li");
    createdLi.classList.add("dart-item");

    const article = document.createElement("article");

    const pName = document.createElement("p");
    pName.textContent = nameInput.value;

    const pScore = document.createElement("p");
    pScore.textContent = `Score: ${scoreInput.value}`;

    const pRounds = document.createElement("p");
    pRounds.textContent = `Round: ${roundInput.value}`;

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "edit");
    editButton.textContent = "edit";
    editButton.addEventListener(`click`, edit);

    const okButton = document.createElement("button");
    okButton.classList.add("btn", "ok");
    okButton.textContent = "ok";
    okButton.addEventListener(`click`, ok);

    //append
    sureList.appendChild(createdLi);
    createdLi.appendChild(article);
    article.appendChild(pName);
    article.appendChild(pScore);
    article.appendChild(pRounds);
    createdLi.appendChild(editButton);
    createdLi.appendChild(okButton);

    addButton.disabled = true;
    nameInput.value = "";
    scoreInput.value = "";
    roundInput.value = "";

    function edit(e) {
      const li = e.currentTarget.parentElement;
      addButton.disabled = false;
      nameInput.value = li
        .querySelector("article")
        .querySelectorAll("p")[0].textContent;

      scoreInput.value = li
        .querySelector("article")
        .querySelectorAll("p")[1]
        .textContent.split(": ")[1];

      roundInput.value = li
        .querySelector("article")
        .querySelectorAll("p")[2]
        .textContent.split(": ")[1];

      sureList.removeChild(li);
    }

    function ok(e) {
      createdLi.removeChild(createdLi.querySelector(".edit"));
      createdLi.removeChild(createdLi.querySelector(".ok"));
      scoreBoardUl.appendChild(createdLi);
      addButton.disabled = false;
    }
  }

  function clearBoard() {
    location.reload();
  }
}
