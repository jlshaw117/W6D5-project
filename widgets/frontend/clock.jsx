import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      time: new Date(), 
      handle: null
    };
    this.tick = this.tick.bind(this);
  }
  
  tick() {
    // debugger
    this.setState({time: new Date()});
  }
  
  componentDidMount() {
    this.setState({handle : setInterval(this.tick, 1000)}); // DON'T USE "="
  }
  
  componentWillUnmount() {
    clearInterval(this.state.handle);
  } 
  
  render () {
    return (
      <div>
        <h1>Hello, Taran and Jerrik</h1>
        <div className="Clock-Container">
          <div className="date">
            <span className="date-header">Date:</span>
            <span className="date-string">{this.state.time.toDateString()}</span>
          </div>
          
          
          <div className="Time">
            <span className="time-header">Time:</span>
            <span className="time-string">{this.state.time.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;