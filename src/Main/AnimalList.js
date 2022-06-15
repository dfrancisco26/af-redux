import React from 'react';
import AnimalItem from './AnimalItem.js';
export default function AnimalList({ animals }) {
  return (
    <div>
      {
        animals.map((animal, i) => <AnimalItem {...animal} key={animal + i}/>)
      }
    </div>
  );
}

