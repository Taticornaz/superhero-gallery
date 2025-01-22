import React from "react";
import Rating from "./Rating";


function HeroCard({ hero }) {
  return (
    <div className="hero-card">
      <img src={hero.url} alt={hero.name} />
      <h3>{hero.name}</h3>
      <p><strong>Альтер эго:</strong> {hero.alterego}</p>
      <p><strong>Занятие:</strong> {hero.occupation}</p>
      <p><strong>Суперспособности:</strong> {hero.superpowers}</p>
      <p><strong>Информация:</strong> {hero.info}</p>
      <Rating heroName={hero.name} /> {}
    </div>
  );
}

export default HeroCard;