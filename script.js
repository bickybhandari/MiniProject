let weather = {
   
    fetchWeather: function(city){
        fetch(
           "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=14a72c2c2910c3800242feb4cea24f0b" 
             )
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + " °C";
    document.querySelector(".humidity").innerText =
       humidity + "%" ;
    document.querySelector(".wind").innerText =
       + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    /*document.body.style.backgroundImage =
      "url('https://www.pexels.com/search/" + name + "')";*/

  },
   search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
}

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Hawaii");