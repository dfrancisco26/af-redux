import React from 'react';
import AnimalList from './AnimalList.js';

export default function main({ animals }) {
  return (
    <div className='Main'>
      {
        <AnimalList animals={ animals } />
      }

    </div>
  );
}
