function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const body = document.querySelector("tbody");
    const rows = Array.from(body.querySelectorAll("tr"));
    const searchValue = document.querySelector("#searchField").value;

    for (const row of rows) {
      row.classList.remove("select");
      let rowCells = Array.from(row.querySelectorAll("td"));
      for (const cell of rowCells) {
        if (cell.textContent.includes(searchValue)) {
          row.classList.add("select");
        }
      }
      document.querySelector("#searchField").value = "";
    }
  }
}
