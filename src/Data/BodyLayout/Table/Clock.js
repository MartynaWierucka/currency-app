import React, { Component } from 'react';

import './clockStyle.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.go(),
      1000
    );
  }


  go() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    let hours = this.state.date.getHours();
    let minutes = this.state.date.getMinutes();
    let seconds = this.state.date.getSeconds();

    let timeWithZeros = () => {
      if (minutes < 10) {
         minutes = "0" + minutes;
      } 

      if (seconds < 10) {
         seconds = "0" + seconds;
      } 
    }

    return (
      <div>
        {timeWithZeros()}
        <p id="clock">{ hours + ":" + minutes + ":" + seconds }</p>
      </div>
    );
  }
}


export default Clock;