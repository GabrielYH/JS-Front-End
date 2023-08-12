async function loadCommits() {
  const usernameInput = document.querySelector("#username").value;
  const repoInput = document.querySelector("#repo").value;
  const commitsUl = document.querySelector("#commits");
  commitsUl.innerHTML = "";
  try {
    const res = await fetch(
      `https://api.github.com/repos/${usernameInput}/${repoInput}/commits`
    );
    if (res.status !== 200) {
        throw new Error(`   ${res.status} (Not Found)`);
    }
    const data = await res.json();
    for (const commitObject of data) {
      const commit = commitObject.commit;
      const createdLi = document.createElement("li");
      createdLi.textContent = `${commit.author.name}:${commit.message}`;
      commitsUl.appendChild(createdLi);
    }
    console.log(data);
  } catch (error) {
    const createdLi = document.createElement("li");
    createdLi.textContent = error;
    commitsUl.appendChild(createdLi);
  }
}
