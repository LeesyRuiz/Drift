import React, { PropTypes } from "react";

import "./CurrentOuting.css";

export default function CurrentOuting( { outing, reset } ) {
  const {
    id,
    name,
    icon,
    description,
    startTime,
    distance,
    location,
  } = outing;
  return (
    <div className="current-outing">
      <div className="current-outing__outing">



        <ul className="current-outing__stats">
          <h3 className="current-outing__location"> { name } </h3>

          <li className="current-outing__stat"> { description }</li>
          <li className="current-outing__stat">{startTime}</li>
          <li className="current-outing__stat">{id}</li>
          <li className="current-outing__stat">{location}</li>
        </ul>
      </div>
      <button
        className="current-outing__search-again"
        onClick={ reset }
        >
        Search Again
      </button>
    </div>
  );
}

CurrentOuting.propTypes = {
  reset: PropTypes.func.isRequired
  , outing: PropTypes.shape( {
    icon: PropTypes.string.isRequired
    , id: PropTypes.string.isRequired
    , name: PropTypes.string.isRequired
    , description: PropTypes.string.isRequired
    , location: PropTypes.string.isRequired
    , distance: PropTypes.string.isRequired
  } ).isRequired
};
