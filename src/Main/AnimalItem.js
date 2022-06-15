import React from 'react';
export default function AnimalItem({ name, type, says }) {
  return (
    <div className="animalDiv">
      <img src={`/animals/${type}.svg`}/>
      <p>{name}</p>
      <p>{says}</p>
    </div>
  );
}
