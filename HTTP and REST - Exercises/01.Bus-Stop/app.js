async function getInfo() {
  const stopName = document.querySelector("#stopName");
  const busesUL = document.querySelector("#buses");
  const stopID = document.querySelector(`#stopId`).value;

  try {
    const res = await fetch(
      `http://localhost:3030/jsonstore/bus/businfo/${stopID}`
    );

    if (res.status !== 200) {
      throw new Error();
    }
    const data = await res.json();
    console.log(data);
    stopName.textContent = data.name;
    const busses = data.buses;
    for (const bus in busses) {
      const createdLi = document.createElement("li");
      createdLi.textContent = `Bus ${bus} arrives in ${busses[bus]} minutes`;
      busesUL.appendChild(createdLi);
    }
  } catch (error) {
    stopName.textContent = error;
    busesUL.innerHTML = "";
  }
}
