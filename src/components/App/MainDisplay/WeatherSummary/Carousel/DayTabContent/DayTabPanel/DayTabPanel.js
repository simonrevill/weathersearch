import React from 'react';
import DayTabPane from './DayTabPane/DayTabPane';

const uuidv4 = require('uuid/v4');

function DayTabPanel(props) {
  const { data, dayId, selectedDay } = props;
  const timePeriods = data[dayId];

  const dayTabPanes = timePeriods.map((timePeriod, index) => (
    <DayTabPane
      data={data}
      key={uuidv4()}
      time={timePeriod.weather_data.time}
      weatherIcon={timePeriod.weather_data.weatherIcon}
      description={timePeriod.weather_data.description}
      temp={timePeriod.weather_data.temp}
    />
  ));

  return (
    <div
      className={dayId === selectedDay ? 'tab-pane show active' : 'tab-pane'}
      id={dayId}
      role="tabpanel"
      aria-labelledby={dayId + '-tab'}
    >
      <div className="d-flex flex-wrap h-100">{dayTabPanes}</div>
    </div>
  );
}

export default DayTabPanel;
