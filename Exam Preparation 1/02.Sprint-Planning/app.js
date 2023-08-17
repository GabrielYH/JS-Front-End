window.addEventListener("load", solve);

function solve() {
  let taskCounter = 1;
  let totalPoints = 0;
  const taskTitleInput = document.querySelector("#title");
  const descriptionInput = document.querySelector("#description");
  const selectLabel = document.querySelector("#label");
  const estPointsInput = document.querySelector("#points");
  const assigneeInput = document.querySelector("#assignee");
  //-----//;
  const createTaskButton = document.querySelector("#create-task-btn");
  createTaskButton.addEventListener("click", createTask);

  function createTask() {
    if (
      taskTitleInput.value === "" ||
      descriptionInput.value === "" ||
      selectLabel.value === "" ||
      estPointsInput.value === "" ||
      assigneeInput.value === ""
    ) {
      alert("Please fill out all input fields before creating a task.");
      return; // Stop further execution
    }
    const taskSection = document.querySelector("#tasks-section");
    const createdArticle = document.createElement("article");
    createdArticle.id = `task-${taskCounter}`;
    createdArticle.classList.add("task-card");

    const divFeature = document.createElement("div");
    divFeature.classList.add("task-card-label");
    if (selectLabel.value === "Feature") {
      //?!
      divFeature.classList.add("feature");
      divFeature.innerHTML = `Feature &#8865`;
    } else if (selectLabel.value === "Low Priority Bug") {
      divFeature.classList.add("low-priority");
      divFeature.innerHTML = `Low Priority Bug &#9737`;
    } else if (selectLabel.value === "High Priority Bug") {
      divFeature.classList.add("high-priority");
      divFeature.innerHTML = `High Priority Bug &#9888`;
    }
    //---//

    const h3Element = document.createElement("h3");
    h3Element.classList.add("task-card-title");
    h3Element.textContent = taskTitleInput.value;
    //---//

    const pElement = document.createElement("p");
    pElement.classList.add("task-card-description");
    pElement.textContent = descriptionInput.value;
    //---//

    const estimatedPointsDiv = document.createElement("div");
    estimatedPointsDiv.classList.add("task-card-points");
    estimatedPointsDiv.innerHTML = `Estimated at ${estPointsInput.value} pts`;
    totalPoints += Number(estPointsInput.value);
    //---//

    const assigneeDiv = document.createElement("div");
    assigneeDiv.classList.add("task-card-assignee");
    assigneeDiv.innerHTML = `Assigned to: ${assigneeInput.value}`;
    //---//
    const deleteDiv = document.createElement("div");
    deleteDiv.classList.add("task-card-actions");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener(`click`, loadDeleteConfirm);

    //appending---//
    deleteDiv.appendChild(deleteButton);
    createdArticle.appendChild(divFeature);
    createdArticle.appendChild(h3Element);
    createdArticle.appendChild(pElement);
    createdArticle.appendChild(estimatedPointsDiv);
    createdArticle.appendChild(assigneeDiv);
    createdArticle.appendChild(deleteDiv);
    taskSection.appendChild(createdArticle);

    taskTitleInput.value = "";
    descriptionInput.value = "";
    selectLabel.value = "Feature";
    estPointsInput.value = "";
    assigneeInput.value = "";

    taskCounter++;

    document.querySelector(
      "#total-sprint-points"
    ).textContent = `Total Points ${totalPoints}pts`;
  }

  function loadDeleteConfirm(e) {
    const currentArticle = e.currentTarget.parentElement.parentElement;
    const id = currentArticle.id;
    console.log(id);
    console.log(currentArticle);
    taskTitleInput.value =
      currentArticle.querySelector(".task-card-title").textContent;
    descriptionInput.value = currentArticle.querySelector(
      ".task-card-description"
    ).textContent;
    const regex = /^(.*?)\s*[⊡☉⚠]/;
    const matches = currentArticle
      .querySelector(".task-card-label")
      .textContent.match(regex);
    const textBeforeSymbol = matches ? matches[1].trim() : label1;
    selectLabel.value = textBeforeSymbol;
    
    
    estPointsInput.value = currentArticle
      .querySelector(".task-card-points")
      .textContent.match(/\d+/);
    assigneeInput.value = currentArticle
      .querySelector(".task-card-assignee")
      .textContent.split(": ")[1];

    document.querySelector("#create-task-btn").disabled = true;
    document.querySelector("#delete-task-btn").disabled = false;
    taskTitleInput.disabled = true;
    descriptionInput.disabled = true;
    selectLabel.disabled = true;
    estPointsInput.disabled = true;
    assigneeInput.disabled = true;

    document.querySelector("#task-id").value = id;

    const deleteTaskButton = document.querySelector("#delete-task-btn");
    deleteTaskButton.addEventListener(`click`, deleteTask);
  }

  function deleteTask() {
    totalPoints -= Number(estPointsInput.value);
    taskTitleInput.value = "";
    descriptionInput.value = "";
    selectLabel.value = "Feature";
    estPointsInput.value = "";
    assigneeInput.value = "";

    taskTitleInput.disabled = false;
    descriptionInput.disabled = false;
    selectLabel.disabled = false;
    estPointsInput.disabled = false;
    assigneeInput.disabled = false;
    document.querySelector("#create-task-btn").disabled = false;
    document.querySelector("#delete-task-btn").disabled = true;

    const id = document.querySelector("#task-id").value;
    const currentArticle = document.querySelector(`#${id}`);
    document.querySelector("#tasks-section").removeChild(currentArticle);

    document.querySelector(
      "#total-sprint-points"
    ).textContent = `Total Points ${totalPoints}pts`;
  }
}
