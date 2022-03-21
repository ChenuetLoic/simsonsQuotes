import './App.css';
import DisplayQuotes from './components/DisplayQuotes';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const getQuote = () => { 
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data)
        setQuote(data[0]);
      });
  };
  const [quote , setQuote] = useState ('');
  return (
    <div className="App">
        <DisplayQuotes quote={quote}/>    
        <button type="button" onClick={getQuote}>Get quote</button>

    </div>
  );
};

export default App;
