function sumTable() {
  let sum = document.querySelector("#sum");
  const prices = Array.from(document.querySelectorAll("td:nth-child(even)"));
  const total = prices.reduce((acc, curr) => {
    return acc + Number(curr.textContent);
  }, 0);
  sum.textContent = total;
}
