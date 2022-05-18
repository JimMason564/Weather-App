var lat
var long
var apiKey = "a66b753a0eee145fbcbd971f2cba1276"
var searchHistory = []
var WeatherApiUrl = "https://api.openweathermap.org/"
var locationUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=" + 1 + "&appid=" + apiKey;

//Create fetch to get location and get weather
function forecast() {
    var locationUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=" + 1 + "&appid=" + apiKey
        fetch(locationUrl)
            .then(function (response) {
                return response.json();
            })
    if (data[0].state) {
        cityState = data[0].name + "," + data[0].state + "," + data[0].country;
    }
    else {
        city = data[0].name + "," + data[0].country;
    }
    var lat = data[0].lat;
    var lon = data[0].lon;
}

//Create fetch to get weather for location function above

//jQuery for display???????????????

//Show history

//Remove history

