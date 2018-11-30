import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {time: new Date() };
    this.tick = this.tick.bind(this);
  }
  
  tick() {
    // debugger
    this.setState({time: new Date()});
  }
  
  componentDidMount() {
    let handle = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(handle);
  } 
  
  render () {
    // debugger
    return (
      <div>
        <h1>Clock</h1>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;