import React, { useState, useEffect } from "react";


function Rating({ heroName }) {
  const [rating, setRating] = useState(localStorage.getItem(heroName) || 3); 

  
  const handleRatingChange = (event) => {
    const newRating = event.target.value;
    setRating(newRating);
    localStorage.setItem(heroName, newRating);
  };

  return (
    <div className="rating">
      <label>Ваша оценка: </label>
      <input
        type="number"
        value={rating}
        min="1"
        max="5"
        step="1"
        onChange={handleRatingChange}
      />
    </div>
  );
}

export default Rating;