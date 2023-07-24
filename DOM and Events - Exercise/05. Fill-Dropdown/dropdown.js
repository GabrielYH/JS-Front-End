function addItem() {
  let textInput = document.querySelector("#newItemText").value;
  let valueInput = document.querySelector("#newItemValue").value;
  let menu = document.querySelector("#menu");
  let option = document.createElement("option");
  option.textContent = textInput;
  option.setAttribute("value", valueInput);
  menu.appendChild(option);

  document.querySelector("#newItemText").value = "";
  document.querySelector("#newItemValue").value = "";

  const button = document.querySelector('input[type="button"]');
}
