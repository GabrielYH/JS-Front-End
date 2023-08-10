function focused() {
  const inputs = Array.from(document.querySelectorAll("input"));
  inputs.forEach((i) => {
    i.addEventListener("focus", (e) => {
      e.target.parentElement.className = "focused";
    });
    i.addEventListener("blur", (e) => {
      e.target.parentElement.className = "";
    });
  });
}
