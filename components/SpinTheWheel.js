import React, { useState } from 'react';
import Wheel from './Wheel';

const SpinTheWheel = () => {
  const [result, setResult] = useState(null);

  const spinWheel = () => {
    const outcomes = ["Win", "Lose", "Try Again"];
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    const outcome = outcomes[randomIndex];
    setResult(outcome);

    // Add animation class to the wheel
    const wheel = document.getElementById('wheel');
    wheel.classList.add('spin');
    setTimeout(() => {
      wheel.classList.remove('spin');
      // Show result in a pop-up
      alert(`You ${outcome}!`);
    }, 4000); // Duration of the spin animation
  };

  return (
    <div className="spin-the-wheel-container">
      <Wheel />
      <button onClick={spinWheel} className="spin-button">Spin the Wheel!</button>
      {result && <p>You {result}!</p>}
    </div>
  );
};

export default SpinTheWheel;
