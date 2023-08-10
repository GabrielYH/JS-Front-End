async function loadRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/testnakov/repos"
    );
    const body = await response.json();
    const divResult = document.querySelector("#res");
    divResult.textContent = JSON.stringify(body);
  } catch (error) {
    console.log(error);
  }
}
