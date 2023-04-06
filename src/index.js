import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/Apps';
import Header from './components/Header';
import Card from './components/card';
import description from './emojiscription';

function createCard(description) {
  return (
    <Card
      key={description.id}
      emoji={description.emoji}
      name={description.name}
      meaning={description.meaning}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    {description.map(createCard)} 
  </React.StrictMode>
);


