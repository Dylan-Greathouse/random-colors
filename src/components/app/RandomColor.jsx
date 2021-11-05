import React, { Component } from 'react';
import '.././App.css';


export class RandomColor extends Component {
    render() {
        const { color } = this.props;
        return (
            <div
                className="colorBox"
                style={
                    this.props.color[4] !== '9'
                    ? {
                          width: '500px',
                          height: '500px',
                          backgroundColor: color,
                      }
                    : {
                          width: '500px',
                          height: '500px',
                          
                      }
                }
                
            
            ></div>
        );
    }
}
export default RandomColor;