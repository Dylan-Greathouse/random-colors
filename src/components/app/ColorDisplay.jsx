import React from 'react';

const ColorDisplay = ({ currentColor }) => {
    return (
      <div className='colorBox'
        style={{
          backgroundColor: currentColor,
          height: 100,
          width: 100,
          marginTop: 20,
        }}
      ></div>
    );
  };

  export default ColorDisplay;