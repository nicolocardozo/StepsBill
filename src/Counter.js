import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [slider, setSlider] = useState(0);

  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  function reset() {
    setCount(0);
    setSlider(1);
  }

  function resAft10Sec() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(resolve);
        resolve('resolved');
      }, 1000);
    });
  }

  console.log(resAft10Sec());

  return (
    <div>
      <div className="">
        <input
          type="range"
          min={0}
          max={10}
          value={slider}
          onChange={e => setSlider(Number(e.target.value))}
        />
        <span>{slider}</span>
        {/* <button onClick={() => setStep(s => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(s => s + 1)}>+</button> */}
      </div>

      <div className="">
        <button onClick={() => setCount(c => c - slider)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount(c => c + slider)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
