// TODO:
function attachEvents() {
  const loadButton = document.querySelector("#load-board-btn");
  const addTaskButton = document.querySelector("#create-task-btn");

  const toDoUl = document.querySelector("#todo-section .task-list");
  const inprogressUl = document.querySelector(
    "#in-progress-section .task-list"
  );
  const codeReviewUl = document.querySelector(
    "#code-review-section .task-list"
  );
  const doneUl = document.querySelector("#done-section .task-list");

  loadButton.addEventListener(`click`, loadData);
  async function loadData() {
    const data = await (
      await fetch("http://localhost:3030/jsonstore/tasks/")
    ).json();
    console.log(data);

    for (const obj in data) {
      if (data[obj].status === "ToDo") {
        const liElement = document.createElement("li");
        liElement.classList.add("task");
        liElement.setAttribute("data-id", data[obj]._id);
        const h3Element = document.createElement("h3");
        h3Element.textContent = data[obj].title;
        const pElement = document.createElement("p");
        pElement.textContent = data[obj].description;
        const toDoMoveButton = document.createElement("button");
        toDoMoveButton.textContent = "Move to In Progress";
        toDoMoveButton.addEventListener(`click`, moveTaskToInProgress);
        liElement.appendChild(h3Element);
        liElement.appendChild(pElement);
        liElement.appendChild(toDoMoveButton);
        toDoUl.appendChild(liElement);
      } else if (data[obj].status === "In Progress") {
        const liElement = document.createElement("li");
        liElement.classList.add("task");
        liElement.setAttribute("data-id", data[obj]._id);
        const h3Element = document.createElement("h3");
        h3Element.textContent = data[obj].title;
        const pElement = document.createElement("p");
        pElement.textContent = data[obj].description;
        const inProgressMoveButton = document.createElement("button");
        inProgressMoveButton.textContent = "Move to Code Review";
        inProgressMoveButton.addEventListener(`click`, moveTaskToCodeReview);
        liElement.appendChild(h3Element);
        liElement.appendChild(pElement);
        liElement.appendChild(inProgressMoveButton);
        inprogressUl.appendChild(liElement);
      } else if (data[obj].status === "Code Review") {
        const liElement = document.createElement("li");
        liElement.classList.add("task");
        liElement.setAttribute("data-id", data[obj]._id);
        const h3Element = document.createElement("h3");
        h3Element.textContent = data[obj].title;
        const pElement = document.createElement("p");
        pElement.textContent = data[obj].description;
        const codeReviewMoveButton = document.createElement("button");
        codeReviewMoveButton.textContent = "Move to Done";
        codeReviewMoveButton.addEventListener(`click`, moveTaskToDone);
        liElement.appendChild(h3Element);
        liElement.appendChild(pElement);
        liElement.appendChild(codeReviewMoveButton);
        codeReviewUl.appendChild(liElement);
      } else if (data[obj].status === "Done") {
        const liElement = document.createElement("li");
        liElement.classList.add("task");
        liElement.setAttribute("data-id", data[obj]._id);
        const h3Element = document.createElement("h3");
        h3Element.textContent = data[obj].title;
        const pElement = document.createElement("p");
        pElement.textContent = data[obj].description;
        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.addEventListener(`click`, closeTask);
        liElement.appendChild(h3Element);
        liElement.appendChild(pElement);
        liElement.appendChild(closeButton);
        doneUl.appendChild(liElement);
      }
    }
  }

  addTaskButton.addEventListener(`click`, addTask);
  async function addTask() {
    if (
      document.querySelector("#title").value === "" ||
      document.querySelector("#description").value === ""
    ) {
      alert("Please fill out all input fields before creating a task.");
      return;
    }

    const taskData = {
      title: document.querySelector("#title").value,
      description: document.querySelector("#description").value,
      status: "ToDo",
    };

    const data = fetch("http://localhost:3030/jsonstore/tasks/", {
      method: "POST",
      body: JSON.stringify(taskData),
    });

    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
    toDoUl.innerHTML = "";
    inprogressUl.innerHTML = "";
    codeReviewUl.innerHTML = "";
    doneUl.innerHTML = "";
    loadData();
  }

  // moving functions
  async function moveTaskToInProgress(e) {
    const id = e.currentTarget.parentElement.getAttribute("data-id");

    const patchData = {
      status: "In Progress",
    };

    const res = await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify(patchData),
    });

    toDoUl.innerHTML = "";
    inprogressUl.innerHTML = "";
    codeReviewUl.innerHTML = "";
    doneUl.innerHTML = "";
    loadData();
  }

  async function moveTaskToCodeReview(e) {
    const id = e.currentTarget.parentElement.getAttribute("data-id");

    const patchData = {
      status: "Code Review",
    };

    const res = await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify(patchData),
    });

    toDoUl.innerHTML = "";
    inprogressUl.innerHTML = "";
    codeReviewUl.innerHTML = "";
    doneUl.innerHTML = "";
    loadData();
  }

  async function moveTaskToDone(e) {
    const id = e.currentTarget.parentElement.getAttribute("data-id");

    const patchData = {
      status: "Done",
    };

    const res = await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify(patchData),
    });

    toDoUl.innerHTML = "";
    inprogressUl.innerHTML = "";
    codeReviewUl.innerHTML = "";
    doneUl.innerHTML = "";
    loadData();
  }

  async function closeTask(e) {
    const id = e.currentTarget.parentElement.getAttribute("data-id");

    const res = await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
      method: "DELETE",
    });

    toDoUl.innerHTML = "";
    inprogressUl.innerHTML = "";
    codeReviewUl.innerHTML = "";
    doneUl.innerHTML = "";
    loadData();
  }
}

attachEvents();
