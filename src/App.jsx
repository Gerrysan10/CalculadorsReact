import { useInsertionEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculateResult = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operator) {
      case 'Suma':
        setResult(number1 + number2);
        break;
      case 'Resta':
        setResult(number1 - number2);
        break;
      case 'Multiplicacion':
        setResult(number1 * number2);
        break;
      case 'Division':
        if (number2 == 0) {
          setResult("NaN")
        }else{
          setResult(number1 / number2);
        }
        break;
      default:
        setResult(null);
    }
  };

  const handleInputChange = (e, num) => {
    const value = e.target.value;
    if (num === 1) {
      setNum1(value);
    } else {
      setNum2(value);
    }
  };

  return (
    <>
      <div id='content'>
        <h1>Calculadora</h1>
        <input
          className="inputs"
          type="text"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => handleInputChange(e, 1)}
        ></input>
        <input
          className="inputs"
          type="text"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => handleInputChange(e, 2)}
        ></input>
        <div className="pair-buttons">
          <button className='buttons' onClick={() => calculateResult('Suma')}>Sumar</button>
          <button className='buttons' onClick={() => calculateResult('Resta')}>Resta</button>
        </div>
        <div className="pair-buttons">
          <button className='buttons' onClick={() => calculateResult('Multiplicacion')}>Multiplicar</button>
          <button className='buttons' onClick={() => calculateResult('Division')}>Dividir</button>
        </div>
        <p id='result'>Resultado: {result}</p>
      </div>
    </>
  );
}

export default App;

