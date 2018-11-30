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
        <h1>Clock</h1>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;