  function solve() {
    const button = document.querySelector("#exercise button");
    const checkmarksEnable = document.querySelectorAll('input[type="checkbox"]');
    for (const checkmark of checkmarksEnable) {
      checkmark.disabled = false;
    }

    button.addEventListener("click", () => {
      const textArea = document.querySelector("#exercise>textarea").value;
      const objectsArray = JSON.parse(textArea);

      const tbody = document.querySelector("tbody");
      for (const object of objectsArray) {
        //imageCell
        const newRow = document.createElement("tr");
        const cellImage = document.createElement("td");
        const imgElement = document.createElement("img");
        const imgSrc = object.img;
        imgElement.src = imgSrc;
        cellImage.appendChild(imgElement);
        newRow.appendChild(cellImage);
        tbody.appendChild(newRow);

        //nameCell
        const nameCell = document.createElement("td");
        const paragraph = document.createElement("p");
        paragraph.textContent = object.name;
        nameCell.appendChild(paragraph);
        newRow.appendChild(nameCell);

        //priceCell
        const priceCell = document.createElement("td");
        const price = document.createElement("p");
        price.textContent = object.price;
        priceCell.appendChild(price);
        newRow.appendChild(priceCell);

        //decorationCell
        const decorationCell = document.createElement("td");
        const decoration = document.createElement("p");
        decoration.textContent = object.decFactor;
        decorationCell.appendChild(decoration);
        newRow.appendChild(decorationCell);

        //checkmarkCell
        const checkmarkCell = document.createElement("td");
        const checkmark = document.createElement("input");
        checkmark.type = "checkbox";
        checkmarkCell.appendChild(checkmark);
        newRow.appendChild(checkmarkCell);
      }
    });

    //getAllChecks
    const buttons = document.querySelectorAll("button");
    let buyButton;
    for (const button of buttons) {
      if (button.textContent == "Buy") {
        buyButton = button;
      }
    }

    const productsArray = new Array();
    const pricesArray = new Array();
    const decorationFactors = new Array();

    buyButton.addEventListener("click", () => {
      const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

      for (const checkBox of checkBoxes) {
        if (checkBox.checked === true) {
          const inputTd = checkBox.parentElement;
          const tr = inputTd.parentElement; //get the row
          const nameCellTd = tr.querySelector("td:nth-child(2)"); // get the nameCell
          const priceCellTd = tr.querySelector("td:nth-child(3)"); // get the priceCell
          const decorCellTd = tr.querySelector("td:nth-child(4)"); // get the decorFactorCell
          const pName = nameCellTd.querySelector("p").textContent; //get the name of the product
          const pPrice = priceCellTd.querySelector("p").textContent;
          const pDecor = decorCellTd.querySelector("p").textContent;
          productsArray.push(pName);
          pricesArray.push(pPrice);
          decorationFactors.push(pDecor);
        }
      }
      const textAreas = document.querySelectorAll("#exercise textarea");
      const buyTextArea = textAreas[1];
      const totalPrice = pricesArray.reduce((acc, curr) => {
        return acc + Number(curr);
      }, 0);
      const sumDecFactor = decorationFactors.reduce((acc, curr) => {
        return acc + Number(curr);
      }, 0);
      const averageDec = sumDecFactor / decorationFactors.length;
      buyTextArea.textContent = `Bought furniture: ${productsArray.join(
        ", "
      )}\nTotal price: ${totalPrice.toFixed(
        2
      )}\nAverage decoration factor: ${averageDec}`;
    });
  }
