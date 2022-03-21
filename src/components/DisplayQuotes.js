import React from 'react';

function DisplayQuotes({ quote }) {
  return (
    quote && (
      <div>
        <img src={quote.image} alt={quote.character} />
        <ul>
          <li>character: {quote.character}</li>
          <li>quote: {quote.quote}</li>
        </ul>
      </div>
    )
  )
}

export default DisplayQuotes;