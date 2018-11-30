import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>call of duty is overrated</h1>, root);
  
  ReactDOM.render(
    <Clock />,
    root
  );
});

