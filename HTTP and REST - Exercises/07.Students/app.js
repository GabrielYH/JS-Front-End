async function attachEvents() {
  const tbody = document.querySelector("tbody");

  const submitButton = document
    .querySelector("#submit")
    .addEventListener(`click`, submitData);

  async function loadData() {
    tbody.innerHTML = "";
    const res = await fetch(
      "http://localhost:3030/jsonstore/collections/students"
    );
    const data = await res.json();
    for (const currObj in data) {
      const obj = data[currObj];
      const dataRow = document.createElement("tr"); // create Row
      //create and append cells
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = obj.firstName;
      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = obj.lastName;
      const facultyNumberCell = document.createElement("td");
      facultyNumberCell.textContent = obj.facultyNumber;
      const gradeCell = document.createElement("td");
      gradeCell.textContent = obj.grade;
      dataRow.appendChild(firstNameCell);
      dataRow.appendChild(lastNameCell);
      dataRow.appendChild(facultyNumberCell);
      dataRow.appendChild(gradeCell);

      tbody.appendChild(dataRow); //The body appends the row
    }
  }

  loadData();

  function submitData() {
    const firstNameInput = document.querySelector(
      `input[name="firstName"]`
    ).value;

    const lastNameInput = document.querySelector(
      `input[name="lastName"]`
    ).value;
    const facultyNumberInput = document.querySelector(
      `input[name="facultyNumber"]`
    ).value;
    const gradeInput = document.querySelector(`input[name="grade"]`).value;

    fetch("http://localhost:3030/jsonstore/collections/students", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstNameInput,
        lastName: lastNameInput,
        facultyNumber: facultyNumberInput,
        grade: gradeInput,
      }),
    });
    document.querySelector(`input[name="firstName"]`).value = "";
    document.querySelector(`input[name="lastName"]`).value = "";
    document.querySelector(`input[name="facultyNumber"]`).value = "";
    document.querySelector(`input[name="grade"]`).value = "";

    loadData();
  }
}

attachEvents();
