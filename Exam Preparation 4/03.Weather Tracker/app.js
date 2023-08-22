const locationInput = document.querySelector("#location");
const temperatureInput = document.querySelector("#temperature");
const dateInput = document.querySelector("#date");

const addWeatherButton = document.querySelector("#add-weather");
addWeatherButton.addEventListener(`click`, addWeather);

const editWeatherButton = document.querySelector("#edit-weather");
editWeatherButton.addEventListener(`click`, editWeather);

const loadHistoryButton = document.querySelector("#load-history");
loadHistoryButton.addEventListener(`click`, loadHistory);

const list = document.querySelector("#list");

async function loadHistory() {
  document.getElementById("list").innerHTML = "";
  const data = await (
    await fetch("http://localhost:3030/jsonstore/tasks/")
  ).json();
  console.log(data);

  editWeatherButton.disabled = true;
  for (const obj in data) {
    const div = document.createElement("div");
    div.classList.add("container");
    div.setAttribute("data-id", data[obj]._id);

    const location = document.createElement("h2");
    location.textContent = data[obj].location;

    const date = document.createElement("h3");
    date.textContent = data[obj].date;

    const temperature = document.createElement("h3");
    temperature.id = "celsius";
    temperature.textContent = data[obj].temperature;

    const divButtons = document.createElement("div");
    divButtons.classList.add("buttons-container");

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    changeButton.addEventListener(`click`, changeWeather);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener(`click`, deleteWeather);

    //append
    list.appendChild(div);
    div.appendChild(location);
    div.appendChild(date);
    div.appendChild(temperature);
    div.appendChild(divButtons);
    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);
  }
}

async function addWeather() {
  const weatherObj = {
    date: dateInput.value,
    location: locationInput.value,
    temperature: temperatureInput.value,
  };
  const post = await fetch("http://localhost:3030/jsonstore/tasks/", {
    method: "POST",
    body: JSON.stringify(weatherObj),
  });

  dateInput.value = "";
  locationInput.value = "";
  temperatureInput.value = "";
  await loadHistory();
}

async function changeWeather(e) {
  const div = e.currentTarget.parentElement.parentElement;
  locationInput.value = div.querySelector("h2").textContent;
  dateInput.value = div.querySelectorAll("h3")[0].textContent;
  temperatureInput.value = div.querySelectorAll("h3")[1].textContent;
  list.removeChild(div);

  const id = div.getAttribute("data-id");
  const hiddenInput = document.createElement("input");
  hiddenInput.type = "hidden";
  hiddenInput.id = "weather-id";
  hiddenInput.name = "weather-id";
  hiddenInput.value = id;
  document.querySelector("form").appendChild(hiddenInput);

  editWeatherButton.disabled = false;
  addWeatherButton.disabled = true;
}

async function editWeather(e) {
  const id =
    e.currentTarget.parentElement.parentElement.querySelector(
      "#weather-id"
    ).value;

  const weatherObj = {
    date: dateInput.value,
    location: locationInput.value,
    temperature: temperatureInput.value,
    _id: id,
  };
  const put = await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "PUT",
    body: JSON.stringify(weatherObj),
  });

  dateInput.value = "";
  locationInput.value = "";
  temperatureInput.value = "";
  editWeatherButton.disabled = true;
  addWeatherButton.disabled = false;
  await loadHistory();
}

async function deleteWeather(e) {
  const id =
    e.currentTarget.parentElement.parentElement.getAttribute("data-id");
  const del = await fetch(`http://localhost:3030/jsonstore/tasks/${id}`, {
    method: "DELETE",
  });
  await loadHistory();
}
