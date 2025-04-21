// src/components/TourCard.jsx
import React, { useState } from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-info">
        <header>
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </header>
        <p>
          {readMore ? info : `${info.substring(0, 150)}... `}
          <button className="read-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="btn remove-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
}

export default TourCard;