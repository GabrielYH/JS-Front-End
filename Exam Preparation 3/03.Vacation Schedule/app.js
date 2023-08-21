const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const daysInput = document.querySelector("#num-days");
const dateInput = document.querySelector("#from-date");

const addVacationButton = document.querySelector("#add-vacation");
addVacationButton.addEventListener(`click`, addVacation);
const editVacationButton = document.querySelector("#edit-vacation");
editVacationButton.addEventListener(`click`, makeChanges);

const loadVacationButton = document.querySelector("#load-vacations");
loadVacationButton.addEventListener(`click`, loadVacations);

const divList = document.querySelector("#list");

async function loadVacations() {
  document.getElementById("list").innerHTML = "";
  const data = await (
    await fetch("http://localhost:3030/jsonstore/tasks/")
  ).json();
  console.log(data);

  for (const obj in data) {
    const divElement = document.createElement("div");
    divElement.classList.add("container");
    divElement.setAttribute("data-id", data[obj]._id);

    const nameElement = document.createElement("h2");
    nameElement.textContent = data[obj].name;

    const dateElement = document.createElement("h3");
    dateElement.textContent = data[obj].date;

    const daysElement = document.createElement("h3");
    daysElement.textContent = data[obj].days;

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    changeButton.addEventListener(`click`, change);

    const doneButton = document.createElement("button");
    doneButton.classList.add("done-btn");
    doneButton.textContent = "Done";
    doneButton.addEventListener(`click`, done);

    //append
    divElement.appendChild(nameElement);
    divElement.appendChild(dateElement);
    divElement.appendChild(daysElement);
    divElement.appendChild(changeButton);
    divElement.appendChild(doneButton);

    divList.appendChild(divElement);

    editVacationButton.disabled = true;
  }
}

async function change(e) {
  const id = e.currentTarget.parentElement.getAttribute("data-id");
  form.setAttribute("data-id", id);
  addVacationButton.disabled = true;
  editVacationButton.disabled = false;
  const div = e.currentTarget.parentElement;
  console.log(div);
  nameInput.value = div.querySelector("h2").textContent;
  daysInput.value = div.querySelectorAll("h3")[1].textContent;
  dateInput.value = div.querySelectorAll("h3")[0].textContent;
  divList.removeChild(div);
}

async function done(e) {
  const id = e.currentTarget.parentElement.getAttribute("data-id");
  const delQuery = await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "DELETE",
  });
  divList.innerHTML = "";
  await loadVacations();
}
async function addVacation() {
  const vacationData = {
    date: dateInput.value,
    days: daysInput.value,
    name: nameInput.value,
  };
  const post = await fetch("http://localhost:3030/jsonstore/tasks/", {
    method: "POST",
    body: JSON.stringify(vacationData),
  });
  nameInput.value = "";
  daysInput.value = "";
  dateInput.value = "";
  await loadVacations();
}

async function makeChanges(e) {
  const id = form.getAttribute("data-id");
  const vacationData = {
    date: dateInput.value,
    days: daysInput.value,
    name: nameInput.value,
    _id: id,
  };
  const put = await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(vacationData),
  });
  await loadVacations();
  editVacationButton.disabled = true;
  addVacationButton.disabled = false;
}

