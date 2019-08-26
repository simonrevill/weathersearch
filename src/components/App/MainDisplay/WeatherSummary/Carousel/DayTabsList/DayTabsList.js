import React from 'react';

import weatherIcons from '../../../../../../WeatherIcons';

import DayTabLink from './DayTabLink/DayTabLink';

function DayTabsList(props) {
	const { data, days, selectedDay, handleClick } = props;

	const dayTabLinks = days.map((day, index) => {
		// If sixth day data is missing *OR* midday data is missing (data[day][4]) - don't render dayTabLink component.
		// This way the app won't crash if data is missing, and will display what data it has:
		if (!data[day][0]) {
			return null;
		} else {
			// If sixth day data (and all other days) is present:
			return (
				<DayTabLink
					key={data[day][0].weather_data.day}
					data={data}
					day={data[day][0].weather_data.day}
					weatherIcon={weatherIcons[`${data[day][0].weather_data.weatherIcon}`].src}
					tempMax={data[day][0].weather_data.tempMax}
					tempMin={data[day][0].weather_data.tempMin}
					description={data[day][0].weather_data.description}
					dayId={day}
					isDaySelected={day === selectedDay ? true : false}
					handleClick={handleClick}
				/>
			);
		}
	});

	return (
		<div className="row day-tabs-list">
			<div className="col-12">
				<div className="weekday-display-bar">
					<ul className='nav nav-tabs' id='myTab' role='tablist'>
						{dayTabLinks}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default DayTabsList;
