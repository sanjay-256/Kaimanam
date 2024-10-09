import React from 'react';

const StarRating = ({ rating }) => {
  // Create an array with the number of stars
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className="star-rating">
      {stars.map((isFilled, index) => (
        <i
          key={index}
          className={isFilled ? "bi bi-star-fill" : "bi bi-star"} 
          style={{ color: isFilled ? 'gold' : 'gray', fontSize: '24px', marginRight: '4px' }}
        ></i>
      ))}
    </div>
  );
};

export default StarRating;
