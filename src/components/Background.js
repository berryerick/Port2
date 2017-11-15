import React, { Component } from 'react';

class Background extends Component {
    render(){
        let getColor = function(){
            let time = new Date()
            let progress = ((time.getHours()*60)+time.getMinutes())/(60*24)
            let value = Math.floor(((Math.sin(2*Math.PI*(progress)-(Math.PI/2))+1)/2)*100)
            // let color = `rgb(${Math.floor(value*.8)},${Math.floor(value*.9)},${value})`;
            let color = `hsl(185,35%,${value/2 + 25}%)`;
            return color
        }

        return (
            <svg id="backgroundSVG">
                <circle cx="50%" cy="50%" r="200" stroke={getColor()} strokeWidth="2" fill={getColor()}></circle>
            </svg>
        )
    }
}

export default Background;
