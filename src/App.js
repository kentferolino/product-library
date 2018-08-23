import React, { Component } from 'react';

import Header from './component/Header';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    const constainerStyle = { paddingTop:"100px", minHeight: "100%", height: "100%" };
    return (
      <div className="content-wrapper">
        <Header location={location} />
        <div className="container" style={constainerStyle}>
          <div className="row">
            <div className="col-lg-12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
