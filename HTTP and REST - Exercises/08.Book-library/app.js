function attachEvents() {
  const loadButton = document
    .querySelector("#loadBooks")
    .addEventListener(`click`, loadData);

  const submitButton = document
    .querySelector("#form button")
    .addEventListener(`click`, handleFormSubmission);

  async function loadData() {
    const books = await (
      await fetch("http://localhost:3030/jsonstore/collections/books")
    ).json();

    for (const currObj in books) {
      const tbody = document.querySelector("tbody");
      const obj = books[currObj];
      const row = document.createElement("tr");

      const titleCell = document.createElement("td");
      titleCell.textContent = obj.title;
      const authorCell = document.createElement("td");
      authorCell.textContent = obj.author;
      const buttonsCell = document.createElement("td");

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener(`click`, editBook);
      editButton.setAttribute("data-bookid", currObj);
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("data-bookid", currObj);
      deleteButton.addEventListener(`click`, deleteBook);

      row.appendChild(titleCell);
      row.appendChild(authorCell);
      row.appendChild(buttonsCell);
      buttonsCell.appendChild(editButton);
      buttonsCell.appendChild(deleteButton);
      tbody.appendChild(row);
    }
  }

  async function editBook(e) {
    console.log(e);
    const title =
      e.currentTarget.parentElement.parentElement.querySelector(
        "td:nth-child(1)"
      ).textContent;

    const author =
      e.currentTarget.parentElement.parentElement.querySelector(
        "td:nth-child(2)"
      ).textContent;

    document.querySelector("#form h3").textContent = "Edit FORM";
    document.querySelector(`#form input[name="title"]`).value = title;
    document.querySelector(`#form input[name="author"]`).value = author;
    document
      .querySelector("#form button")
      .setAttribute("data-bookid", e.currentTarget.dataset.bookid);
  }

  async function deleteBook(e) {
    const bookId = e.currentTarget.dataset.bookid;
    fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
      method: "DELETE",
    });
  }

  async function handleFormSubmission(e) {
    const isEditing = document
      .querySelector("#form h3")
      .textContent.includes("Edit");
    isEditing ? updateBook(e) : saveBook(e);
  }

  async function updateBook(e) {
    const bookId = e.currentTarget.dataset.bookid;
    const title = document.querySelector(`#form input[name="title"]`).value;
    const author = document.querySelector(`#form input[name="author"]`).value;
    fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
      method: "PUT",
      body: JSON.stringify({ author, title }),
    });
  }

  async function saveBook(e) {
    const title = document.querySelector(`#form input[name="title"]`).value;
    const author = document.querySelector(`#form input[name="author"]`).value;

    if (!title || !author) {
      return;
    }

    fetch("http://localhost:3030/jsonstore/collections/books", {
      method: "POST",
      body: JSON.stringify({ title, author }),
    });
    document.querySelector(`#form input[name="title"]`).value = "";
    document.querySelector(`#form input[name="author"]`).value = "";
  }
}

attachEvents();
