import React from 'react';

const div = document.getElementsByClassName('colorBox');

const ColorButton = () => {
  
  
  function getRandomColor(color) {
    return Math.ceil(Math.random() * color);
  };
function changeColor(){
  div.style.backgroundColor= getRandomColor();
}

setInterval(changeColor,1000);
  return (
    <>
     <button key='color'
     onClick={() => changeColor()}>START</button>
    </>
  );
};

export default ColorButton;