import React, { Component } from 'react';
import Header from './components/header/Header';

import './App.css';

class App extends Component {
  render() {
    const { location } = this.props;
    const constainerStyle = { minHeight: "100%", height: "100%" };
    return (
      <div className="content-wrapper">
        {/* Header of the App */}
        <Header location={location} />
        <div className="container" style={constainerStyle}>
          <div className="row">
            <div className="col-lg-12">
              {/* All contents under the App goes here. */}
              {this.props.children}
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
