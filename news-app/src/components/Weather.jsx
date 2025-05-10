import React from "react";
import "./Weather.css";

const Weather = () => {
  return (
    <div className="weather-container">
      <div className="weather">
        <div className="weather-header">
          <div>
            <h2>Outer Hebrides</h2>
            <p className="temp-info">H:24° L:6° · 6:01</p>
          </div>
          <div className="temperature">12°C</div>
        </div>

        <div className="weather-details">
          <div className="weather-box">
            <span>🌬️ Wind</span>
            <strong>5 km/h</strong>
          </div>
          <div className="weather-box">
            <span>💧 Humidity</span>
            <strong>75–85%</strong>
          </div>
          <div className="weather-box">
            <span>🌞 UV Index</span>
            <strong>0 Low</strong>
          </div>
          <div className="weather-box">
            <span>🌧️ Rain</span>
            <strong>20%</strong>
          </div>
        </div>

        <p className="weather-footer">
           A cool, overcast day with a gentle breeze, perfect for a peaceful outdoor escape.
        </p>
      </div>
    </div>
  );
};

export default Weather;
