import { useState } from 'react';
import Counter from './Counter';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrev = () => {
    if (step > 1) {
      setStep(s => s - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(s => s + 1);
    }
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen(is => !isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button txtColor={'#fff'} bgColor={'#7970f2'} onClick={handlePrev}>
              <span>👈 </span>Previous
            </Button>
            <Button txtColor={'#fff'} bgColor={'#7970f2'} onClick={handleNext}>
              Next <span> 👉</span>
            </Button>
          </div>
          <br />
          {/* <Counter /> */}
          <TipCalc />
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3> {children}
    </div>
  );
}

function Button({ txtColor, bgColor, onClick, children }) {
  return (
    <button style={{ backgroundColor: bgColor, color: txtColor }} onClick={onClick}>
      {children}
    </button>
  );
}

function TipCalc() {
  const [bill, setBill] = useState('');
  const [percent1, setPercent1] = useState('');
  const [percent2, setPercent2] = useState('');

  const tip = (bill * (percent1 + percent2)) / 100;

  function handleReset() {
    setBill('');
    setPercent1('');
    setPercent2('');
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage percent={percent1} onSelect={setPercent1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percent={percent2} onSelect={setPercent2}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label htmlFor="bill">How much was the bill?</label>
      <input type="text" id="bill" value={bill} onChange={e => setBill(Number(e.target.value))} />
    </div>
  );
}

function SelectPercentage({ children, percent, onSelect }) {
  return (
    <div>
      <label htmlFor="service">{children}</label>
      <select id="service" value={percent} onChange={e => onSelect(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was ok (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip} tip )
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
