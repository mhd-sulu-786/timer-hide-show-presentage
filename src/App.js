import React, { useState, useRef } from 'react';
import 'react-bootstrap'

function App() {
  const [showText, setShowText] = useState(true);
  const [timerOn, setTimerOn] = useState(false);
  const [time, setTime] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const timerRef = useRef();
let val;
  const toggleText = () => {
    setShowText(!showText);
  };

  const startTimer = () => {
    setTimerOn(true);
    val=true;
    if(val===true){
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
   
  };

  const stopTimer = () => {
    setTimerOn(false);
    val=false;
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(0);
   
    setTimerOn(false);
    val=true;
    startTimer();
  };

  const handleInputChange = event => {
    const value = event.target.value;
    setPercentage(value);
  };

  return (
    <div className='container-fluid vh-100' style={{backgroundColor: 'black', gap: '10px'  }}>
      <div className=' container col-md-4 bg-primary border  rounded p-4  '>
        <h3>Hide && show</h3>
        <button className={`btn ${showText ? 'btn-danger' : 'btn-success'}`} onClick={toggleText}>
           {showText ? 'Hide Text' : 'Show Text'}
             </button>

      {showText && <p className='text-white'>This is the text .</p>}
      </div>

      <div className=' container col-md-4 bg-secondary border mt-2 rounded p-3'>
        <h3> Timer </h3>
        <p className='text-white'>Time: {time} seconds</p>
        <button className='btn btn-success m-2' onClick={startTimer}>Start</button>
        <button className='btn btn-danger m-2' onClick={stopTimer}>Stop</button>
        <button className='btn btn-primary m-2' onClick={resetTimer}>Reset</button>
      </div>

      <div className=' container col-md-4 bg-info border mt-2   rounded p-4  '>
        <h3>Progress Bar</h3>
        <input
          type="number"
          value={percentage>100?100:percentage}
          onChange={handleInputChange}
          placeholder="Enter percentage"
        />
        <div
          style={{
            width: '100%',
            height: '30px',
            backgroundColor: 'lightgray',
            marginTop: '10px',
          }}
        >
          <div
            style={{
              width: `${percentage>100?100:percentage}%`,
              height: '100%',
              backgroundColor: 'blue',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
