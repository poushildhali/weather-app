const apiKey = "ae45f925f0a526036e7892125aaaa514";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather (city){
    const response =await fetch(apiURL + city + `&appid=${apiKey}`);
    var data =await response.json();

    
    console.log(data);
    console.log(searchBtn);


    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = data.main.temp + " °C" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/Hr" ;



    if(data.weather[0]="Clouds"){
        weatherIcon.src = "images/clouds.png";
    }

    else if(data.weather[0]="Clear"){
        weatherIcon.src = "images/clear.png";
    }

    else if(data.weather[0]="Rain"){
        weatherIcon.src = "images/rain.png";
    }

    else if(data.weather[0]="Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }

    else if(data.weather[0]="Mist"){
        weatherIcon.src = "images/mist.png";
    }
    

}

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })

    





