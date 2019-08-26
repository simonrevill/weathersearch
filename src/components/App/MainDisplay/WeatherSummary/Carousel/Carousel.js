import React from 'react';
import DayTabSummary from './DayTabSummary/DayTabSummary';
import DayTabContent from './DayTabContent/DayTabContent';

function Carousel(props) {
  const { data, selectedDay, averageTemp, maxTemp, minTemp } = props;
  console.log(selectedDay);
  return (
    <div id="weatherSummaryCarousel" className="carousel slide d-flex flex-fill" data-interval="false">
      <div className="carousel-inner">
        <div className="carousel-item h-100 active">
          <DayTabSummary data={data} selectedDay={selectedDay} averageTemp={averageTemp} maxTemp={maxTemp} minTemp={minTemp} />
        </div>
        <div className="carousel-item h-100">
          <DayTabContent data={data} selectedDay={selectedDay} averageTemp={averageTemp} maxTemp={maxTemp} minTemp={minTemp} />
        </div>
      </div>
      <a className="carousel-control-prev" href="#weatherSummaryCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon d-none" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#weatherSummaryCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon d-none" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carousel;