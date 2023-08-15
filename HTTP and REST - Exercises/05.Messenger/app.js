async function attachEvents() {
  document.querySelector("#submit").addEventListener(`click`, sendMessages);
  document.querySelector("#refresh").addEventListener(`click`, getMessages);

  async function sendMessages() {
    const authorInput = document.querySelector(`input[name="author"]`).value;
    const messageInput = document.querySelector(`input[name="content"]`).value;
    fetch("http://localhost:3030/jsonstore/messenger", {
      method: "POST",
      body: JSON.stringify({ author: authorInput, content: messageInput }),
    });
  }

  async function getMessages() {
    const res = await fetch("http://localhost:3030/jsonstore/messenger");
    const data = await res.json();

    const textArea = document.querySelector("#messages");
    textArea.innerHTML = "";
    let messages = Object.values(data)
      .map((v) => `${v.author}: ${v.content}`)
      .join("\n");
    document.getElementById("messages").value = messages;
  }
}

attachEvents();
