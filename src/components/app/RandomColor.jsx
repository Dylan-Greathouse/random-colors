import React, { Component } from 'react';



export class RandomColor extends Component {
    render() {
        const { color } = this.props;
        return (
            <div
                className="colorBox"
                style={
                    this.props.color !== '1'
                    ? {
                          width: '300px',
                          height: '300px',
                          backgroundColor: color
                      }
                    : {
                          width: '800px',
                          height: '800px',
                          backgroundColor: 'Black'
                      }
                }
                
            
            ></div>
        );
    }
}
export default RandomColor;