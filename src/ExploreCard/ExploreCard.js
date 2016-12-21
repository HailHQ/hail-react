import React, { Component } from 'react';
import './ExploreCard.css';

class ExploreCard extends Component {
  render() {
    return (
      <div className="explore-card">
				<h4 className="explore-city">{this.props.city}</h4>
			</div>
    );
  }
}

export default ExploreCard;
