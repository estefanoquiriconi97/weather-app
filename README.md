# Weather Application

You can try the application at the following link: [WeatherApp](https://kiricode-weather-app.netlify.app)

## Code Explanation

The above code consists of two main functions: `fetchWeatherData(city)` and `displayWeatherData(data)`. Here's how each one works:

1.  `fetchWeatherData(city)`: This function is responsible for making a request to the OpenWeatherMap API to retrieve weather data for the specified city. It takes the city name as a parameter. It uses the `fetch()` function to send a GET request to the API URL, including the city and your API key. Then, it converts the response to JSON format using the `json()` method. Finally, it calls the `displayWeatherData(data)` function, passing the obtained data as an argument.

    ```javascript
    function fetchWeatherData(city) {
      fetch(`${baseUrl}?q=${city}&appid=${apiKey}`)
        .then((data) => data.json())
        .then((data) => displayWeatherData(data));
    }
    ```

2.  `displayWeatherData(data)`: This function is responsible for displaying weather data on the page. It receives weather data in JSON format as a parameter. First, it extracts various relevant properties from the data, such as the city name, country name, temperature, humidity, description, and weather icon. Then, it creates appropriate HTML elements, such as headers and paragraphs, and assigns them the corresponding content using the `textContent` property. It also creates an image element to display the weather icon. Finally, it adds all the created elements to the `<div>` element with the ID "weatherData" on your page.

    ```javascript
    function displayWeatherData(data) {
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
      temperatureInfo.textContent = `Temperature is: ${Math.floor(
        temperature - kelvinDifference
      )}ºC`;

      const humidityInfo = document.createElement("p");
      humidityInfo.textContent = `Humidity is: ${humidity}%`;

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
    ```
