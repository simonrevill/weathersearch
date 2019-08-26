import React from 'react';

import Loader from './Loader/Loader';
import WeatherSummary from './WeatherSummary/WeatherSummary';

function MainDisplay(props) {
  const { isLoaded, isLoading, data } = props;

  if (!isLoaded) {
    return (
      <Loader isLoading={isLoading} />
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-between main-display">
            <WeatherSummary data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainDisplay;
