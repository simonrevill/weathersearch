import React from 'react';

import weatherIcons from '../../../../../../../WeatherIcons';

function DayTabLink(props) {
	const { data, day, weatherIcon, tempMax, tempMin, description, dayId, handleClick, isDaySelected } = props;

	const dayTimePeriods = data[dayId];
	let temperatures = [];
	let dayWeatherIcons = [];
	dayTimePeriods.forEach(dayTimePeriod => (temperatures.push(dayTimePeriod.weather_data.temp)));
	dayTimePeriods.forEach(dayTimePeriod => (dayWeatherIcons.push(dayTimePeriod.weather_data.weatherIcon)));
	const maxTemp = Math.max(...temperatures);
	const minTemp = Math.min(...temperatures);
	const middayWeatherIcon = dayWeatherIcons[4] || dayWeatherIcons[2];

	return (
		<li className='nav-item d-flex flex-column'>
			{isDaySelected ? null : <div className="blank-block" />}
			<div className={
				isDaySelected ? 'selected-block selected-true' : 'selected-block selected-false'
			}></div>
			<a
				className={
					isDaySelected ? 'nav-link day active' : 'nav-link day'
				}
				id={dayId + '-tab'}
				data-toggle='tab'
				href={'#' + dayId}
				role='tab'
				aria-controls={dayId}
				aria-selected='true'
				onClick={handleClick}
			>
				{day}
			</a>
			<img src={dayId === 'dayOne' ? weatherIcon : weatherIcons[middayWeatherIcon].src} className="mt-4 mx-auto" alt={description} />
			<span className="d-block mt-2 link-temp link-temp-max">{dayId === 'dayOne' ? tempMax : maxTemp}°C</span>
			<span className="d-block link-temp link-temp-min pb-2">{dayId === 'dayOne' ? tempMin : minTemp}°C</span>
		</li>
	);
}

export default DayTabLink;
