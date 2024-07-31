const apiKey = "8b146f8ab19bcd222db3cbbeeb51c182";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search Button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        
    }
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Weather-icon/Cloud.png";
    }

    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Weather-icon/Rain.png";
    }

    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Weather-icon/Clear.png";
    }

    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Weather-icon/Drizzle.png";
    }

    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "Weather-icon/Mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
