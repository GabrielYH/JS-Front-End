window.addEventListener("load", solve);

function solve() {
  const studentInput = document.querySelector("#student");
  const universityInput = document.querySelector("#university");
  const scoreInput = document.querySelector("#score");

  const nextButton = document.querySelector("#next-btn");
  nextButton.addEventListener(`click`, createArticle);

  const previewList = document.querySelector("#preview-list");
  const scholarshipList = document.querySelector("#candidates-list");

  function createArticle() {
    if (
      studentInput.value === "" ||
      universityInput.value === "" ||
      scoreInput.value === ""
    ) {
      return;
    }
    const li = document.createElement("li");
    li.classList.add("application");
    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    h4.textContent = studentInput.value;
    const pUniversity = document.createElement("p");
    pUniversity.textContent = `University: ${universityInput.value}`;
    const pScore = document.createElement("p");
    pScore.textContent = `Score: ${scoreInput.value}`;

    let studentName = studentInput.value;
    let university = universityInput.value;
    let score = scoreInput.value;

    const editButton = document.createElement("button");
    editButton.classList.add("action-btn");
    editButton.classList.add("edit");
    editButton.textContent = "edit";
    editButton.addEventListener(`click`, editArticle);

    const applyButton = document.createElement("button");
    applyButton.classList.add("action-btn");
    applyButton.classList.add("apply");
    applyButton.textContent = "apply";
    applyButton.addEventListener(`click`, applyStudent);

    //append

    previewList.appendChild(li);
    li.appendChild(article);
    article.appendChild(h4);
    article.appendChild(pUniversity);
    article.appendChild(pScore);
    li.appendChild(editButton);
    li.appendChild(applyButton);

    document.querySelector("form").reset();
    nextButton.disabled = true;

    function editArticle(e) {
      studentInput.value = studentName;
      universityInput.value = university;
      scoreInput.value = score;

      nextButton.disabled = false;
      previewList.removeChild(li);
    }

    function applyStudent(e) {
      const article = e.currentTarget.parentElement;
      article.removeChild(article.querySelector(".edit"));
      article.removeChild(article.querySelector(".apply"));
      scholarshipList.appendChild(article);
      nextButton.disabled = false;
    }
  }
}
