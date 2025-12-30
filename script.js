
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");

function getWeather() {
    let city = document.querySelector("#city").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ceccbb464862f5fe2452f3c2843930d3&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("API error");
            }
            return response.json();
        })
        .then(data => {
            let icon = data.weather[0].icon;

            result.innerHTML = `
                <h2>${data.name}</h2>
                <img 
                    class="weather-icon"
                    src="https://openweathermap.org/img/wn/${icon}@2x.png"
                >
                <div class="temp">${Math.round(data.main.temp)}°C</div>
                <div class="status">${data.weather[0].description}</div>
            `;
        })
        .catch(() => {
            result.innerHTML = "❌ City not found";
        });
}

btn.addEventListener("click", getWeather);

document.querySelector("#city").addEventListener("keydown", function (e) {
    if (e.key === "Enter")
        getWeather();
});

