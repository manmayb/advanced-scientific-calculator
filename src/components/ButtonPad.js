import React from 'react';

const ButtonPad = () => {
    const buttonGrid = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+']
    ];

    return (
        <div className="button-pad">
            {buttonGrid.map((row, rowIndex) => (
                <div key={rowIndex} className="button-row">
                    {row.map((button, buttonIndex) => (
                        <button key={buttonIndex} className="button">
                            {button}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ButtonPad;