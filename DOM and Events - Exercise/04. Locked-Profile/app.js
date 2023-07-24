function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll("button"));

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const unlock = button.parentElement.querySelector(
        'input[value="unlock"]'
      );

      if (unlock.checked) {
        if (button.textContent === "Show more") {
          button.textContent = "Hide it";
          const asd = button.parentElement.querySelector("div");
          asd.style.display = "block";
        } else {
          button.textContent = "Show more";
          const asd = button.parentElement.querySelector("div");
          asd.style.display = "none";
        }
      }
    });
  });
}
