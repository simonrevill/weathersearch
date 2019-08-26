import React, { Component } from 'react';

import axios from 'axios';

import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import UserInputForm from '../../components/App/UserInputForm/UserInputForm';
import MainDisplay from '../../components/App/MainDisplay/MainDisplay';

const moment = require('moment');

// Sample OpenWeatherMap API call URL:

// https://api.openweathermap.org/data/2.5/forecast?q=london,gb&APPID=a8186fedbd0095fb3e984cd9c7b02193&units=metric

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppLoading: true,
      isLoaded: false,
      isLoading: false,
      inputText: '',
      data: {
        dayOne: [],
        dayTwo: [],
        dayThree: [],
        dayFour: [],
        dayFive: [],
        daySix: []
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isAppLoading: false
      });
    }, 3000);
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  sortData = data => {
    // Reset state after 1st API call:
    this.setState({
      data: {
        dayOne: [],
        dayTwo: [],
        dayThree: [],
        dayFour: [],
        dayFive: [],
        daySix: []
      }
    });

    const daysOfTheWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    let dayOneDate = moment().format('YYYY-MM-DD');
    let dayTwoDate = moment().add(1, 'days').format('YYYY-MM-DD');
    let dayThreeDate = moment().add(2, 'days').format('YYYY-MM-DD');
    let dayFourDate = moment().add(3, 'days').format('YYYY-MM-DD');
    let dayFiveDate = moment().add(4, 'days').format('YYYY-MM-DD');
    let daySixDate = moment().add(5, 'days').format('YYYY-MM-DD');

    let dayOneDayName = daysOfTheWeek[moment().weekday()];
    let dayTwoDayName = daysOfTheWeek[moment().add(1, 'days').weekday()];
    let dayThreeDayName = daysOfTheWeek[moment().add(2, 'days').weekday()];
    let dayFourDayName = daysOfTheWeek[moment().add(3, 'days').weekday()];
    let dayFiveDayName = daysOfTheWeek[moment().add(4, 'days').weekday()];
    let daySixDayName = daysOfTheWeek[moment().add(5, 'days').weekday()];

    // If a request to the OpenWeatherMap API is made after 21:00 on the free tier,
    // the first date will be the next day's date. Hence, it is necessary to update
    // all the date and day variables to reflect this.

    // Also, sometimes the data for the sixth day will not be present in the API response.
    // This is because around midnight, the data for the sixth day has not been created yet.

    // For the next if statement - to select day one in the data, I've used data.list[0],
    // not data.list[i], as 'i' will be changed inside the for loop as it loops...

    // If dayOneDate !== data.list[0].dt_txt.slice(0, 10), then we know that all the
    // date and day variables need to be updated:

    if (dayOneDate !== data.list[0].dt_txt.slice(0, 10)) {
      dayOneDate = moment().add(1, 'days').format('YYYY-MM-DD');
      dayTwoDate = moment().add(2, 'days').format('YYYY-MM-DD');
      dayThreeDate = moment().add(3, 'days').format('YYYY-MM-DD');
      dayFourDate = moment().add(4, 'days').format('YYYY-MM-DD');
      dayFiveDate = moment().add(5, 'days').format('YYYY-MM-DD');
      daySixDate = moment().add(6, 'days').format('YYYY-MM-DD');
      dayOneDayName = daysOfTheWeek[moment().add(1, 'days').weekday()];
      dayTwoDayName = daysOfTheWeek[moment().add(2, 'days').weekday()];
      dayThreeDayName = daysOfTheWeek[moment().add(3, 'days').weekday()];
      dayFourDayName = daysOfTheWeek[moment().add(4, 'days').weekday()];
      dayFiveDayName = daysOfTheWeek[moment().add(5, 'days').weekday()];
      daySixDayName = daysOfTheWeek[moment().add(6, 'days').weekday()];
    }

    // Loop: sort data / set state:
    for (let i = 0; i < data.list.length; i++) {
      if (data.list[i].dt_txt.slice(0, 10) === dayOneDate) {
        this.setState(prevState => ({
          data: {
            dayOne: [
              ...prevState.data.dayOne,
              {
                weather_data: {
                  cityName: data.city.name,
                  date: data.list[i].dt_txt.slice(0, 10),
                  day: dayOneDayName,
                  time: data.list[i].dt_txt.slice(11, 16),
                  temp: Math.round(data.list[i].main.temp),
                  tempMin: Math.round(data.list[i].main.temp_min),
                  tempMax: Math.round(data.list[i].main.temp_max),
                  weatherIcon: data.list[i].weather[0].icon,
                  description: data.list[i].weather[0].description,
                  windSpeed: data.list[i].wind.speed,
                  windDirection: data.list[i].wind.deg
                },
              }
            ],
            dayTwo: [...prevState.data.dayTwo],
            dayThree: [...prevState.data.dayThree],
            dayFour: [...prevState.data.dayFour],
            dayFive: [...prevState.data.dayFive],
            daySix: [...prevState.data.daySix]
          }
        }));
      } else if (data.list[i].dt_txt.slice(0, 10) === dayTwoDate) {
        this.setState(prevState => ({
          data: {
            dayOne: [...prevState.data.dayOne],
            dayTwo: [
              ...prevState.data.dayTwo,
              {
                weather_data: {
                  cityName: data.city.name,
                  date: data.list[i].dt_txt.slice(0, 10),
                  day: dayTwoDayName,
                  time: data.list[i].dt_txt.slice(11, 16),
                  temp: Math.round(data.list[i].main.temp),
                  tempMin: Math.round(data.list[i].main.temp_min),
                  tempMax: Math.round(data.list[i].main.temp_max),
                  weatherIcon: data.list[i].weather[0].icon,
                  description: data.list[i].weather[0].description,
                  windSpeed: data.list[i].wind.speed,
                  windDirection: data.list[i].wind.deg
                },
              }
            ],
            dayThree: [...prevState.data.dayThree],
            dayFour: [...prevState.data.dayFour],
            dayFive: [...prevState.data.dayFive],
            daySix: [...prevState.data.daySix]
          }
        }));
      } else if (data.list[i].dt_txt.slice(0, 10) === dayThreeDate) {
        this.setState(prevState => ({
          data: {
            dayOne: [...prevState.data.dayOne],
            dayTwo: [...prevState.data.dayTwo],
            dayThree: [
              ...prevState.data.dayThree,
              {
                weather_data: {
                  cityName: data.city.name,
                  date: data.list[i].dt_txt.slice(0, 10),
                  day: dayThreeDayName,
                  time: data.list[i].dt_txt.slice(11, 16),
                  temp: Math.round(data.list[i].main.temp),
                  tempMin: Math.round(data.list[i].main.temp_min),
                  tempMax: Math.round(data.list[i].main.temp_max),
                  weatherIcon: data.list[i].weather[0].icon,
                  description: data.list[i].weather[0].description,
                  windSpeed: data.list[i].wind.speed,
                  windDirection: data.list[i].wind.deg
                },
              }
            ],
            dayFour: [...prevState.data.dayFour],
            dayFive: [...prevState.data.dayFive],
            daySix: [...prevState.data.daySix]
          }
        }));
      } else if (data.list[i].dt_txt.slice(0, 10) === dayFourDate) {
        this.setState(prevState => ({
          data: {
            dayOne: [...prevState.data.dayOne],
            dayTwo: [...prevState.data.dayTwo],
            dayThree: [...prevState.data.dayThree],
            dayFour: [
              ...prevState.data.dayFour,
              {
                weather_data: {
                  cityName: data.city.name,
                  date: data.list[i].dt_txt.slice(0, 10),
                  day: dayFourDayName,
                  time: data.list[i].dt_txt.slice(11, 16),
                  temp: Math.round(data.list[i].main.temp),
                  tempMin: Math.round(data.list[i].main.temp_min),
                  tempMax: Math.round(data.list[i].main.temp_max),
                  weatherIcon: data.list[i].weather[0].icon,
                  description: data.list[i].weather[0].description,
                  windSpeed: data.list[i].wind.speed,
                  windDirection: data.list[i].wind.deg
                },
              }
            ],
            dayFive: [...prevState.data.dayFive],
            daySix: [...prevState.data.daySix]
          }
        }));
      } else if (data.list[i].dt_txt.slice(0, 10) === dayFiveDate) {
        this.setState(prevState => ({
          data: {
            dayOne: [...prevState.data.dayOne],
            dayTwo: [...prevState.data.dayTwo],
            dayThree: [...prevState.data.dayThree],
            dayFour: [...prevState.data.dayFour],
            dayFive: [
              ...prevState.data.dayFive,
              {
                weather_data: {
                  cityName: data.city.name,
                  date: data.list[i].dt_txt.slice(0, 10),
                  day: dayFiveDayName,
                  time: data.list[i].dt_txt.slice(11, 16),
                  temp: Math.round(data.list[i].main.temp),
                  tempMin: Math.round(data.list[i].main.temp_min),
                  tempMax: Math.round(data.list[i].main.temp_max),
                  weatherIcon: data.list[i].weather[0].icon,
                  description: data.list[i].weather[0].description,
                  windSpeed: data.list[i].wind.speed,
                  windDirection: data.list[i].wind.deg
                },
              }
            ],
            daySix: [...prevState.data.daySix]
          }
        }));
      } else if (data.list[i].dt_txt.slice(0, 10) === daySixDate) {
        this.setState(prevState => ({
          data: {
            dayOne: [...prevState.data.dayOne],
            dayTwo: [...prevState.data.dayTwo],
            dayThree: [...prevState.data.dayThree],
            dayFour: [...prevState.data.dayFour],
            dayFive: [...prevState.data.dayFive],
            daySix: [
              ...prevState.data.daySix,
              {
                weather_data: {
                  cityName: data.city.name,
                  date: data.list[i].dt_txt.slice(0, 10),
                  day: daySixDayName,
                  time: data.list[i].dt_txt.slice(11, 16),
                  temp: Math.round(data.list[i].main.temp),
                  tempMin: Math.round(data.list[i].main.temp_min),
                  tempMax: Math.round(data.list[i].main.temp_max),
                  weatherIcon: data.list[i].weather[0].icon,
                  description: data.list[i].weather[0].description,
                  windSpeed: data.list[i].wind.speed,
                  windDirection: data.list[i].wind.deg
                },
              }
            ]
          }
        }));
      }
    }

    // Update state to allow UI to update on screen:
    this.setState({
      isLoaded: true,
      isLoading: false,
      inputText: ''
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // Reset state in case of previous calls to API have updated UI.
    // Turns isLoaded back to false etc...
    this.setState({
      isLoaded: false,
      isLoading: true
    });

    const url = 'https://api.openweathermap.org/data/2.5/forecast?';
    const city = 'q=' + this.state.inputText.toLowerCase().trim() + ',gb';
    const apiKey = '&APPID=a8186fedbd0095fb3e984cd9c7b02193';
    const unitFormat = '&units=metric';

    if (this.state.inputText.length === 0) {
      alert('Please enter the name of a city');
    } else {
      try {
        const res = await axios.get(`${url}${city}${apiKey}${unitFormat}`);
        // console.log(`${url}${city}${apiKey}${unitFormat}`);
        this.sortData(res.data);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
  };

  render() {
    const { isAppLoading, isLoaded, isLoading, inputText, data } = this.state;

    if (isAppLoading) {
      return (
        <div className='App'>
          <WelcomeScreen />
        </div>
      )
    } else {
      return (
        <div className='App'>
          <UserInputForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            isLoading={isLoading}
            isLoaded={isLoaded}
            inputText={inputText}
          />
          <MainDisplay
            isLoaded={isLoaded}
            isLoading={isLoading}
            data={data}
          />
        </div>
      );
    }
  }
}

export default App;