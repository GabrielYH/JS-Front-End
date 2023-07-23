function toggle() {
  const button = document.querySelector(".button");
  const extraContent = document.querySelector("#extra");
  if (button.textContent === "More") {
    button.textContent = "Less";
    extraContent.style.display = "block";
  } else {
    button.textContent = "More";
    extraContent.style.display = "none";
  }
}
