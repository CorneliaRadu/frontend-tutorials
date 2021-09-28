import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./ToggleButtonOnOff.css";

const ToggleButtonOnOff = () => {
  const [isOff, setIsOff] = useState(true);

  return (
    <div className="container">
      <button
        className={!isOff ? 'is-off' : 'is-on'}
        onClick={() => setIsOff(!isOff)}>{isOff ? 'ON' : 'OFF'}
      </button>
    </div>

  );
}

ReactDOM.render(
  <ToggleButtonOnOff />,
  document.getElementById('root')
);