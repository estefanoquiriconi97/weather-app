const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const api_key = "ab07718774edcbaa3f70aee06ea006fe";
const kelvinDifference = 273.15;

document.getElementById("searchButton").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    fechWeatherData(city);
  }
});

function fechWeatherData(city) {
  fetch(`${baseUrl}?q=${city}&appid=${api_key}`)
    .then((data) => data.json())
    .then((data) => displayWeatherData(data));
}

function displayWeatherData(data){
    const weatherDataDiv = document.getElementById("weatherData");
    weatherDataDiv.innerHTML = "";

    const cityName = data.name;
    const countryName = data.sys.country;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const cityHeader = document.createElement("h2");
    cityHeader.textContent = `${cityName}, ${countryName}`;

    const temperatureInfo = document.createElement("p");
    temperatureInfo.textContent = `Temperature is: ${Math.floor(temperature - kelvinDifference)}ºC`

    const humidityInfo = document.createElement("p");
    humidityInfo.textContent = `Humidity is : ${humidity}%`;

    const iconInfo = document.createElement("img");
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const descriptionInfo = document.createElement("p");
    descriptionInfo.textContent = `Weather description: ${description}`;

    weatherDataDiv.appendChild(cityHeader);
    weatherDataDiv.appendChild(temperatureInfo);
    weatherDataDiv.appendChild(humidityInfo);
    weatherDataDiv.appendChild(iconInfo);
    weatherDataDiv.appendChild(descriptionInfo);
}
