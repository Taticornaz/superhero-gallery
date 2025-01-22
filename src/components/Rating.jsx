import React, { useState, useEffect } from "react";

// Компонент для рейтинга
function Rating({ heroName }) {
  const [rating, setRating] = useState(localStorage.getItem(heroName) || 3); // Загрузка рейтинга из localStorage

  // Сохранение нового рейтинга в localStorage
  const handleRatingChange = (event) => {
    const newRating = event.target.value;
    setRating(newRating);
    localStorage.setItem(heroName, newRating); // Сохранение рейтинга в localStorage
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