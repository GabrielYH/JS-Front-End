async function loadRepos() {
  const usernameInput = document.querySelector("#username").value;
  const reposUL = document.querySelector("#repos");
  try {
    const response = await fetch(
      `https://api.github.com/users/${usernameInput}/repos`
    );
    const data = await response.json();
    for (const repo of data) {
      const createLi = document.createElement("li");
      const createdAnchor = document.createElement("a");
      createdAnchor.textContent = `${repo.full_name}`;
      createdAnchor.href = repo.html_url;
      createLi.appendChild(createdAnchor);
      reposUL.appendChild(createLi);
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
