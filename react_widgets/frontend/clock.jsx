import React from 'react';

class Clock extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = { 
      time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    };
    
    this.tick = this.tick.bind(this); 
  
  }
  
  
  tick() {
    this.setState({ time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` });
  }
  
  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount() {
    
  }

  render() {
    return (
      
      // html structure question about single element.... 
      // where to put string interpolation of time
      <div>
        <h1> {this.state.time}</h1>
        <h1> We're in the Clock Class! Wooo! </h1>
      </div>
    );
  }
  
}



export default Clock;