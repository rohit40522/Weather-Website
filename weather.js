const apiKey = "404f2369a9d238131ba407b91244abb6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        console.log(data);

        // Update UI with weather data
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + " km/h";
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";

    } catch (error) {
        console.error("Error fetching weather:", error);
        alert("Could not retrieve weather data. Please check the city name.");
    }
}

searchButton.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    }
});
