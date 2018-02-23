let updateWidget = function(data) {

  console.log("Got weather data: ", data)
  // YOUR CODE GOES HERE
  // assign a variable to the data
  info = data

  console.log(info)

  // pull out the temperature and round it.
  temp = Math.round(info.main.temp)

  console.log(temp)

  // identify the text that needs to be changed, and change text on screen

  let s = $("#change")

  s[0].innerText = "It is " + temp + " degrees outside."

  let pic = info.weather[0].icon

  $("#weather img").attr("src", "http://openweathermap.org/img/w/" + pic + ".png")

  $("#weather h4").text(info.name)

  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.

}


let getWeather = function(event) {

//  let getLat = function(loc){
//    let latitude = loc.coords.latitude.toFixed(4)

//    return latitude
//  }

  let getLocation = function(loc) {
    console.log(loc)

    let latitude = loc.coords.latitude.toFixed(4)
    let longitude = loc.coords.longitude.toFixed(4)

    console.log(latitude)
    console.log(longitude)


    //navigator function was on 54
    //navigator.geolocation.getCurrentPosition(getLocation)

    //let latitude = '48.8566';
    //let longitude = '2.3522';
    let apiKey = 'd76584545b02b767d8d3bf5d3f17f6ed'; // REPLACE THIS VALUE with your own key.

    // replaced api ^^^ key with hw3 key from openweathermap

    let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
    weatherServiceURL += 'lat=' + latitude
    weatherServiceURL += '&lon=' + longitude
    weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

    fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
  }

  navigator.geolocation.getCurrentPosition(getLocation)
  //fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

jQuery("#get_forecast").on("click", getWeather)


////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
