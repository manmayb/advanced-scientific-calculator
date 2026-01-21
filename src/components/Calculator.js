import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === '=') {
            try {
                setResult(eval(input));
                setInput('');
            } catch (error) {
                setResult('Error');
            }
        } else {
            setInput(input + value);
        }
    };

    const renderButtons = () => {
        const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', 'C'];
        return buttons.map((btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)}>{btn}</button>
        ));
    };

    return (
        <div>
            <div className="display">
                <h2>{result || input || '0'}</h2>
            </div>
            <div className="buttons">
                {renderButtons()}
            </div>
        </div>
    );
};

export default Calculator;
