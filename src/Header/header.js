import React from 'react';
import './header.css';
export default function header({ email }) {
  return (
    <div className='header'>
      <p>{email}</p>
    </div>
  );
}
