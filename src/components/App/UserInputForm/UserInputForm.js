import React, { Component } from 'react';

class UserInputForm extends Component {
  render() {
    return (
      <div className={this.props.isLoading || this.props.isLoaded ? "container user-input-form shift" : "container user-input-form"}>
        <div className="row">
          <div className="col-12 py-3">
            <form
              onSubmit={this.props.handleSubmit}
              className="d-flex justify-content-between align-items-center"
              id="user-input-field"
            >
              <div className="form-group w-75 mr-3 mb-0">
                <input
                  type="text"
                  className="form-control pl-2"
                  id="cityInput"
                  onChange={this.props.handleChange}
                  value={this.props.inputText}
                  placeholder="Enter a UK city..."
                />
              </div>
              <button type="submit" className="btn user-search-button w-25">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInputForm;
