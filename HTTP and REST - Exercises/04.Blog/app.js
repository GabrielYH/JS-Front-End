async function attachEvents() {
  async function fetchData(url) {
    const res = await fetch(`${url}`);
    const data = await res.json();
    return data;
  }
  let requests;
  let comments;
  const postTitle = document.querySelector("#post-title");
  const postBody = document.querySelector("#post-body");
  const postCommentsUL = document.querySelector("#post-comments");

  const selectInput = document.querySelector("#posts");
  const buttonLoadPosts = document.querySelector("#btnLoadPosts");
  buttonLoadPosts.addEventListener(`click`, async () => {
    requests = await fetchData("http://localhost:3030/jsonstore/blog/posts");
    for (const obj in requests) {
      const option = document.createElement("option");
      option.setAttribute("value", requests[obj].id);
      option.textContent = requests[obj].title;
      selectInput.appendChild(option);
    }
  });

  const buttonView = document.querySelector("#btnViewPost");
  buttonView.addEventListener(`click`, async () => {
    postCommentsUL.innerHTML = "";
    comments = await fetchData("http://localhost:3030/jsonstore/blog/comments");

    const postIDs = [];
    for (const obj in comments) {
      const innerObj = comments[obj];
      const postId = innerObj.postId;
      if (!postIDs[postId]) {
        postIDs[postId] = [];
      }

      postIDs[postId].push(innerObj);
    }

    const postObj = requests[selectInput.value];

    postTitle.textContent = postObj.title;
    postBody.textContent = postObj.body;
    const collectComments = postIDs[selectInput.value];
    for (const comment of collectComments) {
      const li = document.createElement("li");
      li.textContent = comment.text;
      li.setAttribute("id", comment.id);
      postCommentsUL.appendChild(li);
    }
  });
}

attachEvents();
