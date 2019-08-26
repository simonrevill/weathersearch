import React from 'react';

import Background from '../../../Background';
import Logo from '../../../Logo';

function WelcomeScreen() {
  return (
    <div className="welcome-screen d-flex justify-content-center align-items-center">
      <div className="welcome-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <img src={Background.src} className="bg-image" alt="WeatherSearch Background" />
            <img src={Logo.src} className="welcome-logo pb-5" alt="WeatherSearch Logo" />
            <div className="welcome-loader-container mt-5">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="loader-inner">
                  <div className="loader-bar loader-bar-1"></div>
                  <div className="loader-bar loader-bar-2"></div>
                  <div className="loader-bar loader-bar-3"></div>
                </div>
                <div className="loader-loading mt-3">
                  <p className="m-0">LOADING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;