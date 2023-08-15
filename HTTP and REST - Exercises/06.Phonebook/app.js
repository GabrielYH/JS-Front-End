function attachEvents() {
  const phoneBookUL = document.querySelector("#phonebook");
  const loadButton = document.querySelector("#btnLoad");

  let personInput = document.querySelector("#person").value;
  let phoneInput = document.querySelector("#phone").value;

  const createButton = document.querySelector("#btnCreate");

  //load
  loadButton.addEventListener(`click`, async () => {
    const res = await fetch("http://localhost:3030/jsonstore/phonebook");
    const data = await res.json();

    for (const pair in data) {
      const li = document.createElement("li"); //create li
      const deleteButton = document.createElement("button"); //create DELETE button
      deleteButton.textContent = "Delete";
      li.textContent = `${data[pair].person}: ${data[pair].phone}`;
      deleteButton.addEventListener(`click`, async () => {
        fetch(`http://localhost:3030/jsonstore/phonebook/${data[pair]._id}`, {
          method: "DELETE",
        });
        li.remove();
      });
      phoneBookUL.appendChild(li);

      li.appendChild(deleteButton);
    }
  });

  //create
  createButton.addEventListener(`click`, async () => {
    fetch("http://localhost:3030/jsonstore/phonebook", {
      method: "POST",
      body: JSON.stringify({
        person: document.querySelector("#person").value,
        phone: document.querySelector("#phone").value,
      }),
    });
    document.querySelector("#person").value = "";
    document.querySelector("#phone").value = "";
    loadButton.click();
  });

  function deleteEntry(id) {
    fetch("http://localhost:3030/jsonstore/phonebook/:key", {
      method: DELETE,
    });
    li.remove();
  }
}

attachEvents();
