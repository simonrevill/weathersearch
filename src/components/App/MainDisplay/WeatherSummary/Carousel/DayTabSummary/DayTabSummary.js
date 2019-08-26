import React from 'react';
import weatherIcons from '../../../../../../WeatherIcons';

function DayTabSummary(props) {
  const { data, selectedDay, averageTemp, maxTemp, minTemp } = props;
  const daysOfTheWeek = { mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', sat: 'Saturday', sun: 'Sunday' };
  const formatDescription = description => {
    let firstChar = description[0].toUpperCase();
    let subString = description.substring(1);

    let fullDescription = firstChar + subString;
    return fullDescription;
  }

  let selectedDescription;
  const lastAvailableDescription = formatDescription(data[selectedDay][(data[selectedDay].length - 1)].weather_data.description);

  if (selectedDay === 'dayOne') {
    selectedDescription = formatDescription(data[selectedDay][0].weather_data.description);
  } else if (selectedDay !== 'dayOne' && data[selectedDay][4].weather_data.description) {
    selectedDescription = formatDescription(data[selectedDay][4].weather_data.description);
  } else {
    selectedDescription = lastAvailableDescription;
  }

  return (
    <div className="col-12 current-weather-display px-0">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-6 d-flex justify-content-start align-items-end pr-0">
              <p className="mb-0 h6 p-0 day-name text-right">
                {daysOfTheWeek[data[selectedDay][0].weather_data.day]}
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-end pl-0">
              <p className="mb-0 h6 p-0 city-name">{data[selectedDay][0].weather_data.cityName}</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6 d-flex justify-content-start align-items-center pr-0">
              <p className="mb-0 h6 p-0 current-time">
                {selectedDay === 'dayOne' ? data[selectedDay][0].weather_data.time : null}
              </p>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center pl-0">
              <p className="mb-0 h6 p-0 day-name text-right">
                Forecast &#9654;
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex justify-content-center align-items-center pr-0">
              <img
                src={
                  selectedDay === 'dayOne' ?
                    weatherIcons[`${data[selectedDay][0].weather_data.weatherIcon}`].src
                    :
                    weatherIcons[`${data[selectedDay][4].weather_data.weatherIcon}`].src
                }
                alt={selectedDescription}
              />
            </div>
            <div className="col-6 pl-0">
              <p className="pt-3 mb-0 text-right current-temp">{selectedDay === 'dayOne' ? data[selectedDay][0].weather_data.temp : averageTemp}°</p>
              <p className="mb-0 text-right max-temp-text"><span className="max-temp">Max: </span>{selectedDay === 'dayOne' ? data[selectedDay][0].weather_data.tempMax : maxTemp}°C</p>
              <p className="text-right min-temp-text mb-0"><span className="min-temp">Min: </span>{selectedDay === 'dayOne' ? data[selectedDay][0].weather_data.tempMin : minTemp}°C</p>
            </div>
          </div>

          {/* WIND SPEED - NEXT UPDATE... */}

          {/* <div className="row">
            <div className="col-12">
              <p className="text-right">Wind speed</p>
            </div>
          </div> */}
          <div className="row">
            <div className="col-12 pr-0">
              <p className="my-0 current-description">{selectedDescription}</p>
            </div>
            <div className="col-6 pl-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayTabSummary;