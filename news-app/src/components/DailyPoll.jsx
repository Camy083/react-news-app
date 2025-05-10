import React, { useState } from 'react';
import './DailyPoll.css';

const pollData = [
  { label: 'Tech', image: '/tech1.jpg', percentage: 38 },
  { label: 'Sports', image: '/sports1.jpg', percentage: 12 },
  { label: 'Science', image: '/science1.jpg', percentage: 25 },
  { label: 'World', image: '/health1.jpg', percentage: 25 },
];

const DailyPoll = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      setSubmitted(true);
    }
  };

  return (
    <div className="daily-poll-box">
      <h2>🗳️ Daily Poll</h2>
      <p className="poll-question">Which do you prefer to read?</p>

      {!submitted ? (
        <>
          <div className="poll-options-row">
            {pollData.map((item) => (
              <div
                key={item.label}
                className={`poll-card ${selectedOption === item.label ? 'selected' : ''}`}
                onClick={() => handleOptionClick(item.label)}
              >
                <img src={item.image} alt={item.label} />
                <p>{item.label} News</p>
              </div>
            ))}
          </div>

          <button className="poll-submit" onClick={handleSubmit} disabled={!selectedOption}>
            Submit
          </button>
        </>
      ) : (
        <>
          <p className="poll-thanks">Thank you for voting!</p>
          <div className="poll-results">
            {pollData.map((item) => (
              <div className="poll-bar" key={item.label}>
                <div
                  className="poll-fill"
                  style={{ width: `${item.percentage}%` }}
                >
                  {item.label}
                </div>
                <span className="poll-percent">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DailyPoll;
