import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock.jsx'; // ask TA about double or single dots 
import Header from './frontend/header.jsx';

const panes = [
  {title: "tree", content: "coconut"},
  {},
  {}
];

function Root() {
  return(
    <div>
      hamburger
      <Clock />
      <Header />
    </div>
  );
} 

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Root />, root);
    
  
  });