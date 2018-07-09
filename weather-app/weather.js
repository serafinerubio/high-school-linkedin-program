$(document).ready(function() {
    var getWeather = function(selectedCity) {
        //this is where we did the encoded b4 the selectedCity 
        //like as a part of the name 
        selectedCity = window.encodeURIComponent(selectedCity);
 
        var url =
        //within the pluses you call the function that you previously 
        //defined 
        "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition %20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + selectedCity + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
 
 
        $.get(url).done(function(response) {
            var weatherCondition = response.query.results.channel.item.condition.text;
            var weatherTemp = response.query.results.channel.item.condition.temp;
 
            $('.city-name').text(selectedCity);
            $('#weatherDisplay').show();
 
 
        });
    };
 
 var button = document.getElementById('weatherApp');
 button.addEventListener('submit', processWeather)
 var processWeather = function(e) {
    e.preventDefault();
 
    var selectedCity = $('#cities').val();
    getWeather(selectedCity);
 };
 });