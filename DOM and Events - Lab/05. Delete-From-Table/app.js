function deleteByEmail() {
  const labelValue = document.querySelector(`input[name="email"]`).value;

  const customers = Array.from(document.querySelectorAll("td:nth-child(even)"));
  const elementToRemove = customers.find(
    (email) => email.textContent === labelValue
  );
  const res = document.querySelector("#result");
  if (elementToRemove) {
    elementToRemove.parentElement.remove();
    res.textContent = "Deleted.";
  } else {
    res.textContent = "Not found.";
  }
}
