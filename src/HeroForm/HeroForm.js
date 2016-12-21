import React, { Component } from 'react';
import './HeroForm.css';

class HeroForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      ride: true,
      drive: false
    }
    console.log(this.state);
  }

  ride() {
    this.setState({
      ride: true,
      drive: false
    });
  }

  drive() {
    this.setState({
      ride: false,
      drive: true
    });
  }

  renderRide() {
    return (
      <div>
        <h1 onClick={this.ride.bind(this)} id="hero-form-selected" className="hero-form-opt">Ride</h1>
        <h1 onClick={this.drive.bind(this)} id="hero-form-default" className="hero-form-opt">Drive</h1>
      </div>
    );
  }

  renderDrive() {
    return (
      <div>
        <h1 onClick={this.ride.bind(this)} id="hero-form-default" className="hero-form-opt">Ride</h1>
        <h1 onClick={this.drive.bind(this)} id="hero-form-selected" className="hero-form-opt">Drive</h1>
      </div>
    );
  }

  render() {
    if (this.state.ride) {
      return this.renderRide();

    } else {
      return this.renderDrive();
    }
  }
}

export default HeroForm;
