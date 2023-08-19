const loadCoursesButton = document.querySelector("#load-course");
loadCoursesButton.addEventListener(`click`, loadCourses);
const coursesInProgress = document.querySelector("#list");
const addCourseButton = document.querySelector("#add-course");
addCourseButton.addEventListener(`click`, addCourse);
const editCourseButtonForm = document.querySelector("#edit-course");
editCourseButtonForm.addEventListener(`click`, editCoursePut);
editCourseButtonForm.disabled = true;

async function loadCourses() {
  const data = await (
    await fetch("http://localhost:3030/jsonstore/tasks/")
  ).json();
  console.log(data);
  for (const obj in data) {
    const div = document.createElement("div");
    div.classList.add("container");
    div.setAttribute("data-id", data[obj]._id);

    const h2 = document.createElement("h2");
    h2.textContent = data[obj].title;

    const h3Teacher = document.createElement("h3");
    h3Teacher.textContent = data[obj].teacher;

    const h3Type = document.createElement("h3");
    h3Type.textContent = data[obj].type;

    const h4 = document.createElement("h4");
    h4.textContent = data[obj].description;

    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit Course";
    editButton.addEventListener(`click`, editCourse);

    const finishButton = document.createElement("button");
    finishButton.classList.add("finish-btn");
    finishButton.textContent = "Finish Course";
    finishButton.addEventListener(`click`, finishCourse);

    //append
    coursesInProgress.appendChild(div);
    div.appendChild(h2);
    div.appendChild(h3Teacher);
    div.appendChild(h3Type);
    div.appendChild(h4);
    div.appendChild(editButton);
    div.appendChild(finishButton);
  }
}

function editCourse(e) {
  editCourseButtonForm.disabled = false;
  document.querySelector("#add-course").disabled = true;
  const div = e.currentTarget.parentElement;
  console.log(div);
  document.querySelector("#course-name").value =
    div.querySelector("h2").textContent;
  document.querySelector("#course-type").value =
    div.querySelectorAll("h3")[1].textContent;
  document.querySelector("#description").value =
    div.querySelector("h4").textContent;
  document.querySelector("#teacher-name").value =
    div.querySelectorAll("h3")[0].textContent;
  const id = e.currentTarget.parentElement.getAttribute("data-id");
  const form = document.querySelector("#form");
  form.setAttribute("data-id", id);
  coursesInProgress.removeChild(div);
}

async function editCoursePut() {
  const id = document.querySelector("#form").getAttribute("data-id");
  console.log(id);
  const courseData = {
    description: document.querySelector("#description").value,
    teacher: document.querySelector("#teacher-name").value,
    title: document.querySelector("#course-name").value,
    type: document.querySelector("#course-type").value,
    _id: id,
  };
  const put = await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(courseData),
  });
}

async function finishCourse(e) {
  const id = e.currentTarget.parentElement.getAttribute("data-id");

  const del = await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "DELETE",
  });
  document.querySelector("#list").innerHTML = "";
  loadCourses();
}

async function addCourse() {
  const titleInput = document.querySelector("#course-name");
  const typeInput = document.querySelector("#course-type");
  const description = document.querySelector("#description");
  const teacher = document.querySelector("#teacher-name");
  if (
    titleInput.value === "" ||
    typeInput.value === "" ||
    description.value === "" ||
    teacher.value === ""
  ) {
    alert("Please fill all forms!");
    return;
  }
  if (
    typeInput.value !== "Long" &&
    typeInput.value !== "Medium" &&
    typeInput.value !== "Short"
  ) {
    alert("Invalid type!");
    return;
  }
  const courseData = {
    description: description.value,
    teacher: teacher.value,
    title: titleInput.value,
    type: typeInput.value,
  };
  const post = fetch("http://localhost:3030/jsonstore/tasks/", {
    method: "POST",
    body: JSON.stringify(courseData),
  });
  titleInput.value = "";
  typeInput.value = "";
  description.value = "";
  teacher.value = "";
  document.querySelector("#list").innerHTML = "";
  loadCourses();
}
