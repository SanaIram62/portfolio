let weather = {
    "apiKey" : "060530816677dc7aac0c7974b4df382a",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q= " 
            + city  
            + "&units=metric&appid="
            + this.apiKey )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/w/" + icon + ".png" ;
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + " °C";
        document.querySelector(".humidity").innerHTML = "Humidity: " +humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed: " +speed+ "km/h";




    },
    search: function () {
        this.fetchWeather(document.querySelector(".bar").value);
    }
};
document
    .querySelector(".search button")
    .addEventListener("click", function () {
        weather.search();
    });