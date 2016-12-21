import React from 'react';
import ReactDOM from 'react-dom';
import HeroForm from './HeroForm/HeroForm';
import ExploreCard from './ExploreCard/ExploreCard'
import './index.css';

ReactDOM.render(
  <HeroForm />,
  document.getElementById('hero-form')
);

ReactDOM.render(
  <div>
    <ExploreCard city="Mumbai" />
    <ExploreCard city="Mumbai" />
  </div>
  ,
  document.getElementById('explore-cards')
);
