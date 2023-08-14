function attachEvents() {
  const getWeatherButton = document.querySelector("#submit");

  async function fetchAllForecastData(input) {
    try {
      const res = await fetch(
        "http://localhost:3030/jsonstore/forecaster/locations"
      );
      const data = await res.json();
      //console.log(data);
      for (const locationObject of data) {
        for (const propp in locationObject) {
          if (locationObject[propp] === input) {
            //fetching  currConditions
            const currConditionsData = await fetchDataFromUrl(
              "http://localhost:3030/jsonstore/forecaster/today/",
              locationObject
            );
            //fetching 3-day forecast
            const threeDayForecast = await fetchDataFromUrl(
              `http://localhost:3030/jsonstore/forecaster/upcoming/`,
              locationObject
            );
            const forecastDiv = document.querySelector("#forecast");
            const currDiv = document.querySelector("#forecast #current");
            forecastDiv.style.display = "block";

            //append currentCondition elements
            const currentDiv = document.querySelector("#current");
            const conditionSymbolSpan = document.createElement("span");
            conditionSymbolSpan.classList.add("condition", "symbol");
            if (currConditionsData.forecast.condition === "Sunny") {
              conditionSymbolSpan.textContent = "\u2600";
            } else if (
              currConditionsData.forecast.condition === "Partly sunny"
            ) {
              conditionSymbolSpan.textContent = "\u26C5";
            } else if (currConditionsData.forecast.condition === "Overcast") {
              conditionSymbolSpan.textContent = "\u2601";
            } else if (currConditionsData.forecast.condition === "Rain") {
              conditionSymbolSpan.textContent = "\u2614";
            }
            currDiv.appendChild(conditionSymbolSpan);

            const conditions = document.createElement("span");
            conditions.classList.add("condition");

            const city = document.createElement("span");
            const temperature = document.createElement("span");
            const weather = document.createElement("span");

            city.classList.add("forecast-data");
            city.textContent = currConditionsData.name;

            temperature.classList.add("forecast-data");
            temperature.textContent = `${
              currConditionsData.forecast.low
            }${"\u00B0"}/${currConditionsData.forecast.high}${"\u00B0"}`;

            weather.classList.add("forecast-data");
            weather.textContent = currConditionsData.forecast.condition;

            conditions.appendChild(city);
            conditions.appendChild(temperature);
            conditions.appendChild(weather);
            currDiv.appendChild(conditions);

            //append upcomingDays elements
            const upcomingDiv = document.querySelector("#upcoming");

            const upcomingForecastInfo = document.createElement("span");
            upcomingForecastInfo.classList.add("forecast-info");
            upcomingDiv.appendChild(upcomingForecastInfo);

            const upcomingDiv1 = document.createElement("span");
            upcomingDiv1.classList.add("upcoming");
            const upcomingSymbol1 = document.createElement("span");
            upcomingSymbol1.classList.add("symbol");
            if (threeDayForecast.forecast[0].condition === "Sunny") {
              upcomingSymbol1.textContent = "\u2600";
            } else if (
              threeDayForecast.forecast[0].condition === "Partly sunny"
            ) {
              upcomingSymbol1.textContent = "\u26C5";
            } else if (threeDayForecast.forecast[0].condition === "Overcast") {
              upcomingSymbol1.textContent = "\u2601";
            } else if (tthreeDayForecast.forecast[0].condition === "Rain") {
              upcomingSymbol1.textContent = "\u2614";
            }
            const upcomingDegrees1 = document.createElement("span");
            upcomingDegrees1.classList.add("forecast-data");
            upcomingDegrees1.textContent = `${
              threeDayForecast.forecast[0].low
            }${"\u00B0"}/${threeDayForecast.forecast[0].high}${"\u00B0"}`;
            const upcomingCondition1 = document.createElement("span");
            upcomingCondition1.classList.add("forecast-data");
            upcomingCondition1.textContent =
              threeDayForecast.forecast[0].condition;

            const upcomingDiv2 = document.createElement("span");
            upcomingDiv2.classList.add("upcoming");
            const upcomingSymbol2 = document.createElement("span");
            upcomingSymbol2.classList.add("symbol");
            if (threeDayForecast.forecast[1].condition === "Sunny") {
              upcomingSymbol2.textContent = "\u2600";
            } else if (
              threeDayForecast.forecast[1].condition === "Partly sunny"
            ) {
              upcomingSymbol2.textContent = "\u26C5";
            } else if (threeDayForecast.forecast[1].condition === "Overcast") {
              upcomingSymbol2.textContent = "\u2601";
            } else if (threeDayForecast.forecast[1].condition === "Rain") {
              upcomingSymbol2.textContent = "\u2614";
            }
            const upcomingDegrees2 = document.createElement("span");
            upcomingDegrees2.classList.add("forecast-data");
            upcomingDegrees2.textContent = `${
              threeDayForecast.forecast[1].low
            }${"\u00B0"}/${threeDayForecast.forecast[1].high}${"\u00B0"}`;
            const upcomingCondition2 = document.createElement("span");
            upcomingCondition2.classList.add("forecast-data");
            upcomingCondition2.textContent =
              threeDayForecast.forecast[1].condition;

            const upcomingDiv3 = document.createElement("span");
            upcomingDiv3.classList.add("upcoming");
            const upcomingSymbol3 = document.createElement("span");
            upcomingSymbol3.classList.add("symbol");
            if (threeDayForecast.forecast[2].condition === "Sunny") {
              upcomingSymbol3.textContent = "\u2600";
            } else if (
              threeDayForecast.forecast[2].condition === "Partly sunny"
            ) {
              upcomingSymbol3.textContent = "\u26C5";
            } else if (threeDayForecast.forecast[2].condition === "Overcast") {
              upcomingSymbol3.textContent = "\u2601";
            } else if (threeDayForecast.forecast[2].condition === "Rain") {
              upcomingSymbol3.textContent = "\u2614";
            }
            const upcomingDegrees3 = document.createElement("span");
            upcomingDegrees3.classList.add("forecast-data");
            upcomingDegrees3.textContent = `${
              threeDayForecast.forecast[2].low
            }${"\u00B0"}/${threeDayForecast.forecast[2].high}${"\u00B0"}`;
            const upcomingCondition3 = document.createElement("span");
            upcomingCondition3.classList.add("forecast-data");
            upcomingCondition3.textContent =
              threeDayForecast.forecast[2].condition;

            upcomingDiv1.appendChild(upcomingSymbol1);
            upcomingDiv2.appendChild(upcomingSymbol2);
            upcomingDiv3.appendChild(upcomingSymbol3);
            upcomingDiv1.appendChild(upcomingDegrees1);
            upcomingDiv2.appendChild(upcomingDegrees2);
            upcomingDiv3.appendChild(upcomingDegrees3);
            upcomingDiv1.appendChild(upcomingCondition1);
            upcomingDiv2.appendChild(upcomingCondition2);
            upcomingDiv3.appendChild(upcomingCondition3);
            upcomingForecastInfo.appendChild(upcomingDiv1);
            upcomingForecastInfo.appendChild(upcomingDiv2);
            upcomingForecastInfo.appendChild(upcomingDiv3);
          }
        }
      }
    } catch (error) {}
  }

  async function fetchDataFromUrl(url, locationObject) {
    try {
      const currCondtRes = await fetch(`${url}${locationObject.code}`);
      const currCondtData = await currCondtRes.json();
      return currCondtData;
    } catch (error) {}
  }

  getWeatherButton.addEventListener("click", () => {
    const input = document.querySelector("#location").value;
    fetchAllForecastData(input);
  });
}

attachEvents();
