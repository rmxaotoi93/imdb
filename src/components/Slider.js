import React, { Component } from 'react'
import {Slider, Typography} from '@material-ui/core'


export class Sliderr extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:  [20,100],
            valuetext : ''
        }
    }
    render() {
        return (
            <div >
            <Typography id="range-slider" gutterBottom>
              Temperature range
            </Typography>
            <Slider
              value={this.state.value}
              onChange={this.handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={this.state.valuetext}
            />
          </div>
        )
    }
}

export default Slider
