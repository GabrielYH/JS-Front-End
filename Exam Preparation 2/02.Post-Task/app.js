window.addEventListener("load", solve);

function solve() {
  const titleInput = document.querySelector("#task-title");
  const categoryInput = document.querySelector("#task-category");
  const contentInput = document.querySelector("#task-content");

  const publishButton = document.querySelector("#publish-btn");
  publishButton.addEventListener(`click`, publishTask);

  const reviewList = document.querySelector("#review-list");
  const publishedList = document.querySelector("#published-list");

  function publishTask() {
    if (
      titleInput.value === "" ||
      categoryInput.value === "" ||
      contentInput.value === ""
    ) {
      alert("Empty inputs!");
      return;
    }

    const createdLi = document.createElement("li");
    createdLi.classList.add("rpost");
    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    h4.textContent = titleInput.value;
    const p = document.createElement("p");
    p.textContent = `Category: ${categoryInput.value}`;
    const pContent = document.createElement("p");
    pContent.textContent = `Content: ${contentInput.value}`;
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("action-btn", "edit");
    editButton.addEventListener(`click`, editTask);
    const postButton = document.createElement("button");
    postButton.textContent = "Post";
    postButton.classList.add("action-btn", "post");
    postButton.addEventListener(`click`, postTask);

    //append
    article.appendChild(h4);
    article.appendChild(p);
    article.appendChild(pContent);
    createdLi.appendChild(article);
    createdLi.appendChild(editButton);
    createdLi.appendChild(postButton);
    reviewList.appendChild(createdLi);

    titleInput.value = "";
    categoryInput.value = "";
    contentInput.value = "";
  }

  function editTask(e) {
    const li = e.currentTarget.parentElement.querySelector("article");
    console.log(e.currentTarget.parentElement);
    titleInput.value = li.querySelector("h4").textContent;
    categoryInput.value = li.querySelectorAll("p")[0].textContent.split(": ")[1];
    contentInput.value = li.querySelectorAll("p")[1].textContent.split(": ")[1];
    reviewList.removeChild(e.currentTarget.parentElement);
  }

  function postTask(e) {
    const li = e.currentTarget.parentElement.querySelector("article");
    const createdLi = document.createElement("li");
    createdLi.classList.add("rpost");
    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    h4.textContent = li.querySelector("h4").textContent;
    const p = document.createElement("p");
    p.textContent = li.querySelectorAll("p")[0].textContent;
    const pContent = document.createElement("p");
    pContent.textContent = li.querySelectorAll("p")[1].textContent;
    article.appendChild(h4);
    article.appendChild(p);
    article.appendChild(pContent);
    createdLi.appendChild(article);
    publishedList.appendChild(createdLi);
    reviewList.removeChild(e.currentTarget.parentElement);
  }
}
