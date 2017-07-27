import { buildURL, buildEventsUrl, formatOutingData } from '../utils/outingUtils';
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


export function getlatlon(location){

  var url = buildURL( location );
  var reply = axios.get( url ).then(
    response => {
      var  thelat = response.data.coord.lat;
      var  thelon = response.data.coord.lon;
      console.log(thelat);
      console.log(thelon);
      return {
        lat: thelat,
        // lon: thelon
      }
    }
  )
  console.log(reply.lat);
  // console.log(reply.lon);
  // return [reply.lat,reply.lon]
}


export  function setOuting( location ) {
  var url = buildURL( location );
  var x = getlatlon(location)
  console.log(x );
  var fburl = buildEventsUrl(11,22);

  const promisefb = axios.get( fburl ).then( response =>
    console.log(response.data));
    return {
       payload: promisefb
    }


  const promise = axios.get( url ).then( response =>
    formatOutingData( response.data) );
    return {
      type: SET_OUTING,
      payload: promise
    }
  }



  // export  function setOuting( location ) {
  //   var url = buildURL( location );
  //   var x = getlatlon(location)
  //   console.log(x );
  //   const promise = axios.get( url ).then( response =>
  //     formatOutingData( response.data) );
  //     return {
  //       type: SET_OUTING,
  //       payload: promise
  //     }
  //   }
