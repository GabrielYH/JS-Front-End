function subtract() {
  const num1 = document.querySelector("#firstNumber").value;
  const num2 = document.querySelector("#secondNumber").value;
  const result = (document.querySelector("#result").value =
    Number(num1) - Number(num2));
  const asd = (document.querySelector("#result").textContent = result);
}
