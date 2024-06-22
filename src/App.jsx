import React, { useState } from 'react';
import './App.css';

function App() {
  const [input1, setInput1] = useState('0');
  const [input2, setInput2] = useState('0');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('0');
  const [storedValue, setStoredValue] = useState('0');

  const handleNumberClick = (number, setInput, input) => {
    setInput(input === '0' ? number : input + number);
  };

  const handleOperationClick = (op) => {
    setOperation(op);
  };

  const handleEqualClick = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let res;
    switch (operation) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num1 / num2;
        break;
      default:
        res = 0;
    }
    setResult(res.toString());
  };

  const handleClearClick = (setInput) => {
    setInput('0');
  };

  const handleStoreClick = () => {
    setStoredValue(result);
  };

  const handleRecallClick = (setInput) => {
    setInput(storedValue);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{input1}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString(), setInput1, input1)}>
              {num}
            </button>
          ))}
          <button onClick={() => handleClearClick(setInput1)}>Clear</button>
          <button onClick={() => handleRecallClick(setInput1)}>Recall</button>
        </div>
      </div>
      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          {['+', '-', '*', '/'].map((op) => (
            <button key={op} onClick={() => handleOperationClick(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>
      <div className="panel">
        <p>{input2}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => handleNumberClick(num.toString(), setInput2, input2)}>
              {num}
            </button>
          ))}
          <button onClick={() => handleClearClick(setInput2)}>Clear</button>
          <button onClick={() => handleRecallClick(setInput2)}>Recall</button>
        </div>
      </div>
      <div className="answer">
        <p>{result}</p>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={handleStoreClick}>Store</button>
      </div>
    </div>
  );
}

export default App;
