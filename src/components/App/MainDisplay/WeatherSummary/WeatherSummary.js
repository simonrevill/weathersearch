import React, { Fragment, Component } from 'react';
import Carousel from './Carousel/Carousel';
import DayTabsList from './Carousel/DayTabsList/DayTabsList';

class WeatherSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: 'dayOne'
    };
  }

  handleClick = e => {
    const newSelectedDay = e.target.id.slice(0, -4);
    this.setState({
      selectedDay: newSelectedDay
    });
  }

  render() {
    const { selectedDay } = this.state;
    const { data } = this.props;
    const days = Object.keys(data);

    const dayTimePeriods = data[selectedDay];
    const dayTimePeriodsAmount = dayTimePeriods.length;
    let temperatures = [];
    let temperaturesSum = 0;
    dayTimePeriods.forEach(dayTimePeriod => (temperatures.push(dayTimePeriod.weather_data.temp)));
    dayTimePeriods.forEach(dayTimePeriod => (temperaturesSum += dayTimePeriod.weather_data.temp));
    const averageTemp = Math.round(temperaturesSum / dayTimePeriodsAmount);
    const maxTemp = Math.max(...temperatures);
    const minTemp = Math.min(...temperatures);

    return (
      <Fragment>
        <Carousel data={data} selectedDay={selectedDay} averageTemp={averageTemp} maxTemp={maxTemp} minTemp={minTemp} />
        <DayTabsList data={data} days={days} selectedDay={selectedDay} handleClick={this.handleClick} />
      </Fragment>
    )
  }
}

export default WeatherSummary;
