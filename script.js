const apiKey = "afd885975f5833ca9b655e5c53a6f2bb";
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search-box input");
    const searchBtn = document.querySelector('.search-box button');
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city){
        const response = await fetch(apiURL + city + `&appid=${apiKey}`)
        let data = await response.json();

        if(response.status == 404){
            document.querySelector('.error').style.display = "block";
            document.querySelector('.weather').style.display = "none";
        }else{
            // Changing Contents as per the response of the API
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " &deg; C" ;
            document.querySelector(".humidity").innerHTML = data.main.humidity+ " %";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            
            
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "assets/cloudy.png";
            }else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "assets/sun.png";
            }else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "assets/rainy-day.png";
            }else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "assets/rainy-day.png";
            }else if(data.weather[0].main == "Thunderstorm"){
                weatherIcon.src = "assets/thunderstorm.png";
            }
            
            document.querySelector('.weather').style.display = "block";
            document.querySelector('.error').style.display = "none";
        }
    }
    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value)
    })