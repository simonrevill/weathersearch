import React, { Component } from 'react';

class Loader extends Component {
  render() {
    const { isLoading } = this.props;
    return (
      <div className={isLoading ? 'container' : 'container d-none'}>
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="loader-container">
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
    )
  }
}

export default Loader;