function solve() {
  const info = document.querySelector(".info");
  const departButton = document.querySelector("#depart");
  const arriveButton = document.querySelector("#arrive");
  let busStopInfo = {
    name: "",
    next: "depot",
  };

  async function depart() {
    const res = await fetch(
      `http://localhost:3030/jsonstore/bus/schedule/${busStopInfo.next}`
    );
    const data = await res.json();
    busStopInfo = data;

    departButton.disabled = true;
    arriveButton.disabled = false;
    info.textContent = `Next stop ${busStopInfo.name}`;
  }

  async function arrive() {
    arriveButton.disabled = true;
    departButton.disabled = false;
    info.textContent = `Arriving at ${busStopInfo.name}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
