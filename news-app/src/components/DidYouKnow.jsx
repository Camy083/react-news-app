import React, { useState } from 'react';
import './DidYouKnow.css';
import { FaRegLightbulb } from 'react-icons/fa';

const DidYouKnow = () => {
  const facts = [
    "One tree can produce 1.2 kg of oxygen per day.",
    "Bamboo is the fastest-growing plant on Earth.",
    "Rainforests are home to more than half of the world's species.",
    "Coral reefs support over 25% of marine life.",
    "Bees pollinate over 75% of flowering plants.",
    "The Amazon produces 20% of the world’s oxygen supply.",
    "A mature oak tree can drink 100 gallons of water a day.",
    "Earthworms improve soil health by creating tunnels.",
    "Mangroves protect coastlines from erosion and storm surges.",
    "Sunlight takes 8 minutes to reach Earth, powering all ecosystems."
  ];

  const [fact, setFact] = useState(facts[0]);

  const changeFact = () => {
    let newFact;
    do {
      newFact = facts[Math.floor(Math.random() * facts.length)];
    } while (newFact === fact);
    setFact(newFact);
  };

  return (
    <div className="didyouknow-container">
      <div className="didyouknow-card">
        <FaRegLightbulb className="lightbulb-icon" />
        <h2>DID YOU KNOW?</h2>
        <p className="fact-text">{fact}</p>
        <button className="change-fact-button" onClick={changeFact}>
          Change Fact
        </button>
      </div>
    </div>
  );
};

export default DidYouKnow;
