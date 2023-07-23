function create(words) {
  const contentElement = document.querySelector("#content");
  console.log(contentElement);
  for (const word of words) {
    const createdDiv = document.createElement("div");
    const createdP = document.createElement("p");
    createdDiv.appendChild(createdP);
    createdP.textContent = word;
    createdP.style.display = "none";
    createdDiv.addEventListener("click", () => {
      createdP.style.display = "block";
    });
    contentElement.appendChild(createdDiv);
  }
}
