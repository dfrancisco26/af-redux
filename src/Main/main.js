import React from 'react';
import AnimalList from './AnimalList.js';
import backgroundImage from '../background.png';

export default function main({ animals }) {
  return (
    <div className='Main' style={{ backgroundImage: `url(${backgroundImage})` }}>
      {
        <AnimalList animals={ animals } />
      }

    </div>
  );
}
