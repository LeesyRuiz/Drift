import { buildURL, formatOutingData } from '../utils/outingUtils';
import axios from 'axios';

const initialState = {
  error: false,
  loading: false,
  search: true,
  outing: {}
};

const RESET = "RESET";
const SET_OUTING = "SET_OUTING";

export default function outing( state = initialState, action ) {
  switch ( action.type ) {
    case SET_OUTING + "_PENDING":
    return {
      error: false,
      loading: true,
      search: false,
      outing: {}
    };
    case SET_OUTING + "_FULFILLED":
    return {
      error: false,
      loading: false,
      search: false,
      outing: action.payload
    };
    case SET_OUTING + "_REJECTED":
    return {
      error: true,
      loading: false,
      search: false,
      outing: {}
    };

    case RESET: return initialState;
    default: return state;
  }
}

export function reset() {
  return { type: RESET };
}
//
// export function loggingShit( mydata ) {
//   // var x = JSON.parse(mydata)
//   // var url = buildURL( location );
//   // const promise2 = axios.get( url ).then( response => {
//   var x  = mydata["coords"]
//   var lattt = x["lat"]
//   console.log(x);
//   console.log(lattt);
//     // const coords = promise.data.map(function(obj) { return obj["coords"] })
//     // this.setState({ lat: coords["lat"] })
//     // this.setState({ lon: coords["lon"] })
//     // console.log(this.state.lat);
//     // alert(this.state.lat)
//   };
//
//   export function setOuting( location ) {
//     var url = buildURL( location );
//     var loki = axios.get( url ).then( response => {
//       loggingShit( response.data )} );
//     // we need a new url to the facebook api
//

  //   const promise = axios.get( url ).then( response => formatOutingData( response.data ) );
  //    return {
  //     type: SET_OUTING,
  //     payload: promise
  //   }
  // }






export function setOuting( location ) {
  var url = buildURL( location );
  const promise = axios.get( url ).then( response => {
    console.log(response.data.coord.lat);
    console.log(response.data.coord.lon);
    formatOutingData( response.data)
  });

   return {
    type: SET_OUTING,
    payload: promise
  }
}
