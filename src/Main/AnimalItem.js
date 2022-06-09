import React from 'react';

export default function AnimalItem({ name, type }) {
  return (
    <div className="animalDiv">
      <img src={`/animals/${type}.svg`} />
      <p>{name}</p>
    </div>
  );
}
