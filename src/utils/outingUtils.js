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
function isZipCode( location ) { return !isNaN( parseInt( location ) ); }
function getOutingIcon( conditionCode ) { if ( conditionCode === 800 ) { return sunny; } if ( conditionCode >= 200 && conditionCode < 600 ) { return rainy; } if ( conditionCode >= 600 && conditionCode < 700 ) { return snowy; } if ( conditionCode >= 801 && conditionCode <= 803 ) { return partlyCloudy; } if ( conditionCode === 804 ) { return cloudy; } return unknownIcon; }

export function formatOutingData( outingData  )
{ return {
  // icon: getOutingIcon( 800),
  id: "87",
  // lat: "",
  name: "ghasfgsd",
  icon: "ghasfgsd",
  description: "ghasfgsd",
  startTime: "ghasfgsd",
distance: "ghasfgsd",
location: "ghasfgsd" };
}

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

// &lat=
// 47.617
// &lng=
// -122.332
// &distance=500&sort=time&accessToken=
//
// EAACEdEose0cBACCiD5E6fbJYpky3u2HxvhPhHUwZBkWZBLqoWAE425WNznfMDe3ZCRA5KW2ZAkWWAfaxZAUhz7yyfLuSguOxzZBRijXK2hBJ3N3JOHkALJgq2li5wMLk0Cr0tvf6ZBStpza42L7uME6BaTXzZCIlfLVSrUdmbo2DZBv7gZAcD3ohiu0vPjTwlrn00ZD


export function buildEventsUrl( lat , lng ) {
  return EVENT_URL + `lat=`+ 51.51 + '&lng=' + '-0.13'+ '&distance=500&sort=time&accessToken=' + 'EAACEdEose0cBACCiD5E6fbJYpky3u2HxvhPhHUwZBkWZBLqoWAE425WNznfMDe3ZCRA5KW2ZAkWWAfaxZAUhz7yyfLuSguOxzZBRijXK2hBJ3N3JOHkALJgq2li5wMLk0Cr0tvf6ZBStpza42L7uME6BaTXzZCIlfLVSrUdmbo2DZBv7gZAcD3ohiu0vPjTwlrn00ZD'
}
export function buildURL( location ) { if ( isZipCode( location ) ) { return BASE_URL + `zip=${location}`; } return BASE_URL + `q=${location}`; }
