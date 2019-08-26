import React, { Fragment } from 'react';

import DayTabPanel from './DayTabPanel/DayTabPanel';

const uuidv4 = require('uuid/v4');

function DayTabContent(props) {
  const { data, selectedDay } = props;
  const daysOfTheWeek = { mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', sat: 'Saturday', sun: 'Sunday' };

  const days = Object.keys(data);

  const dayTabPanels = days.map((day, index) => (
    <DayTabPanel
      data={data}
      key={uuidv4()}
      dayId={day}
      selectedDay={selectedDay}
    />
  ));

  return (
    <Fragment>
      <div className="tab-content h-100" id="myTabContent">
        <div className="forecast-description-container">
          <div className="row">
            <div className="col-8 d-flex justify-content-start align-items-end">
              {selectedDay === 'dayOne' ?
                <p className="mb-0 h6 p-0 text-white current-weather">&#9664; Current Weather</p>
                :
                <p className="mb-0 h6 p-0 text-white summary-weather">&#9664; Summary</p>
              }

            </div>
            <div className="col-4">
              <p className="mb-0 h6 p-0 text-right day-name">{daysOfTheWeek[data[selectedDay][0].weather_data.day]}</p>
              <p className="mb-0 h6 px-1 text-right font-italic three-hour-forecast">3 Hour Forecast</p>
            </div>
          </div>
        </div>
        {dayTabPanels}
      </div>
    </Fragment>
  );
}

export default DayTabContent;
