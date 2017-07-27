import React, { PropTypes } from "react";

import "./CurrentOuting.css";

export default function CurrentOuting( { outing, reset } ) {
  const {
    currentTemperature,
    humidity,
    icon,
    location,
    maxTemperature,
    minTemperature,
    wind
  } = outing;
  return (
    <div className="current-outing">
      <div className="current-outing__outing">
        <h3 className="current-outing__location"> { location } </h3>
        <img
          alt="current outing icon"
          className="current-outing__icon"
          src={ icon }
        />
        <h3 className="current-outing__temp"> { currentTemperature }° </h3>

        <div className="current-outing__separator" />

        <ul className="current-outing__stats">
          <li className="current-outing__stat">Max: { maxTemperature }°</li>
          <li className="current-outing__stat">Min: { minTemperature }°</li>
          <li className="current-outing__stat">Wind: { wind } MPH</li>
          <li className="current-outing__stat">Humidity: { humidity }%</li>
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
    , currentTemperature: PropTypes.number.isRequired
    , maxTemperature: PropTypes.number.isRequired
    , minTemperature: PropTypes.number.isRequired
    , wind: PropTypes.number.isRequired
    , humidity: PropTypes.number.isRequired
  } ).isRequired
};
