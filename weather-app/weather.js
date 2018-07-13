$(document).ready(function() {
    var getWeather = function(selectedCity) {
        //this is where we did the encoded b4 the selectedCity 
        //like as a part of the name 
        encodedselectedCity = window.encodeURIComponent(selectedCity);

        var url = 
        //within the pluses you call the function that you previously 
        //defined 
        
        "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + encodedselectedCity + "%22)&format=json&env=store%3A%2F%2Fdatata";
 
 
        $.get(url).done(function(response) {
            var weatherCondition = response.query.results.channel.item.condition.text;
            var weatherTemp = response.query.results.channel.item.condition.temp;


            $('.city-name').text(selectedCity);
            $('.weather-condition').text(weatherCondition);
            $('.weather-temp').text(weatherTemp);

 
        });
    };
 
 var button = document.getElementById('button');
 var processWeather = function(e) {
    e.preventDefault();
 
    var selectedCity = $('#Cities option:selected').text();
    getWeather(selectedCity);
 };
 button.addEventListener('click', processWeather)
 });