import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>You done goofed A A ron</h1>, root);
  
  ReactDOM.render(
    <Root />,
    root
  ); 
});

function Root () {
  return (
    <div className="root">
      <Clock/>
    </div>
  );
}