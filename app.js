let userInput = document.querySelector('#inputy');
let searchButton = document.querySelector('#search-btn');
let weatherCard = document.querySelector('.weather-card');
let cityName = document.querySelector('#city');
let cityTemperature = document.querySelector('#temp');
let citydescription = document.querySelector('#des');

searchButton.addEventListener("click", ()=>{
    let city = userInput.value;

    let apiKey = "YOUR_API_KEY_HERE";

    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        cityName.textContent = data.name;
        cityTemperature.textContent = data.main.temp;
        citydescription.textContent = data.weather[0].description;

        let weatherImg = "";

        switch(data.weather[0].main.toLowerCase()){
            case "clouds":
                    weatherImg = "images/clouds.png";
                    break;
            case "sun":
                    weatherImg = "images/sun.png"; 
                    break;       
            case "clear":
                    weatherImg = "images/clear.png";
                    break;
            case "rain":
                    weatherImg = "images/rainy.png";
                    break;
            case "partlycloudy":
                    weatherImg = "images/partlycloudy.png";
                    break;
            case "snow":
                    weatherImg = "images/snow.png";
                    break;
            case "wind":
                    weatherImg = "images/rainy.png";
                    break;
            default:
                   weatherImg = "images/allweather.png";       
        }
        weatherCard.innerHTML = `<img src="${weatherImg}" 
        alt="${data.weather[0].main}" class="weather-icon">
        <div id="city">${data.name}</div>
        <div id="temp">${data.main.temp}°C</div>
        <div id="des">${data.weather[0].main}</div>`;

    }).catch(()=>{
        let errorImg = "images/error.png";

        weatherCard.innerHTML = `<img src="${errorImg}" alt="Error" class="weather-icon">
        <p style="font-size:20px">City Not found..Try Again!</p>`;
    })

});
