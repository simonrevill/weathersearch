import React from 'react';

import weatherIcons from '../../../../../../../../WeatherIcons';

function DayTabPane(props) {
  const { time, weatherIcon, description, temp } = props;
  const descriptionFormatted = description[0].toUpperCase() + description.substring(1);
  return (
    <div className="d-flex flex-column justify-content-start align-items-center time-period pb-3">
      <p className="mt-3 text-center h6">{time}</p>
      <img
        src={weatherIcons[`${weatherIcon}`].src}
        className="mt-3"
        alt={descriptionFormatted}
      />
      <p className="mt-3 text-center h6">{temp}°C</p>
      <p className="mt-3 text-center h6 description">{descriptionFormatted}</p>
    </div>
  );
}

export default DayTabPane;
