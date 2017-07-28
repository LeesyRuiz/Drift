/* eslint-disable */
import cloudy from "../assets/cloudy.svg";
import partlyCloudy from "../assets/partly-cloudy.svg";
import rainy from "../assets/rainy.svg";
import snowy from "../assets/snowy.svg";
import sunny from "../assets/sunny.svg";
import unknownIcon from "../assets/unknown-icon.svg";
import API_KEY from "../apiKey";

const EVENT_URL = "http://192.168.99.100:3000/events?"

const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${ API_KEY }&units=imperial&`;
// function isZipCode( location ) { return !isNaN( parseInt( location ) ); }
// function getOutingIcon( conditionCode ) { if ( conditionCode === 800 ) { return sunny; } if ( conditionCode >= 200 && conditionCode < 600 ) { return rainy; } if ( conditionCode >= 600 && conditionCode < 700 ) { return snowy; } if ( conditionCode >= 801 && conditionCode <= 803 ) { return partlyCloudy; } if ( conditionCode === 804 ) { return cloudy; } return unknownIcon; }

// export function formatOutingData( outingData  )
// { return {
//   // icon: getOutingIcon( 800),
//   id: "87",
//   // lat: "",
//   name: " ",
//   icon: "g ",
//   description: " ",
//   startTime: " d",
// distance: "g ",
// location: "ghasfgsd" };
// }

// export function formatOutingData_Backup( outingData )
// { return {
//   icon: getOutingIcon( outingData.weather[0].id ),
//   currentTemperature: outingData.main.temp,
//   location: outingData.name,
//   maxTemperature: outingData.main.temp_max,
//   minTemperature: outingData.main.temp_min,
//   humidity: outingData.main.humidity,
//   wind: outingData.wind.speed };
// }l
 export function buildEventsUrl( lat , lng ) {

  return EVENT_URL + `lat=`+ 47.617 + '&lng=' + '-122.332'+ '&distance=500&sort=time&accessToken=' + 'EAACEdEose0cBAJgafANFQKPjZCuOZCZBgDBlvrn0OBjeHpgoGkifWWnCDduchHXHRTOYk7uwXqZATsTl1d3ovXZAyG8TmliPHCZB1x4SW2jHbnqWtT4PS9afUnRMH0ZACoERy8dR394oVCrnbgep8ZBFtDADL6ZAVzq7scZBTqew6kaNdfQutBD56TMFPOgbLSHH8ZD'
}
export function buildURL( location ) { if ( isZipCode( location ) ) { return BASE_URL + `zip=${location}`; } return BASE_URL + `q=${location}`; }
