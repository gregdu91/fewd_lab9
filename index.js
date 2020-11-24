import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import Jul from './img/jul.jpg'
  

class ClickImg extends React.Component {
  constructor() {
      super();
      this.state = {
          clickNum: 0
      };
      this.handleClicks = this.handleClicks.bind(this);
  }
  handleClicks() {
      this.setState(prevState => ({
          clickNum: prevState.clickNum + 1
      }));

  }



render() {
  return (
      <div>
          <h1>The image is clicked {this.state.clickNum} times.</h1>
          <img onClick={this.handleClicks} src={Jul}></img>
      </div>
    );
  }
};

ReactDOM.render(
  <ClickImg />,
  document.getElementById('root')

);

