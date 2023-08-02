function addItem() {
  const value = document.querySelector("#newItemText").value;
  const li = document.createElement("li");
  li.textContent = value;
  document.querySelector("ul").appendChild(li);
}
