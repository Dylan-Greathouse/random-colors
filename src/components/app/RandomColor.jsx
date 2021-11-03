import React, { Component } from 'react';
import ColorDisplay from './ColorDisplay';
import ColorButton from './ColorButton';

function getRandomColor(color) {
    return Math.ceil(Math.random() * color);
  };
class RandomColor extends Component {
    state = {
        currentColor: '',
    };


    handleColorChange = (color) => {
    this.setState({ currentColor: color });
    };

    render() {
        const colors = ['blue', 'red', 'yellow', 'green', 'pink', 'teal', 'white', 'purple'];
        const { currentColor } = getRandomColor (colors);

    return (
        <>
         <h1>Press Button for Random Colors!</h1>
        <ColorButton />
        <ColorDisplay currentColor={currentColor} />
        </>

    );
    }
}
export default RandomColor;