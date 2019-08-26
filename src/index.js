import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import './styles.css';

/*
  WeatherSearch v1.0.0
  Design & Code by Simon Revill
  Date: 23/08/2019
  
  Next Update: 
  
  1. Add wind speed and direction to DayTabSummary and DayTabPane components.
  2. Check middayDescription and middayWeatherIcon - do they work in the early morning?
  3. Sort out size of background for the welcome screen - needs to work on XL screens too.
 */

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
