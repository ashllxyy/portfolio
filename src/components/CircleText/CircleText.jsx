import React from 'react';
import './CircleText.css';

export default function CircleText() {
  let circleText = 'ASHLLXYY - ETHOS - ';
  return (

    <div className='circle'>
        <div className='circle-text'>
        {circleText.split('').map((letter, index) => (
            <span key={index} style={{ transform: `rotate(${index * (360/circleText.length)}deg)` }}>
            {letter}
            </span>
        ))}
        </div>
    </div>
  );
}