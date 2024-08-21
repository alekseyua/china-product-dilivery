import React, { Component } from 'react'
import { connectStoreon } from 'storeon/react'
import Track from './Track'

export class TrackContainer extends Component {
    state = {
        valueTrack: '',
    }

    handlerTrack = () => {
        alert('тест клика, нужно решить что делать дальше for number ' + this.state.valueTrack) 
    }

    handlerChangeInput = (event: Event) => {
        console.log({event})
        const target = event.target as HTMLInputElement;
        this.setState({
            valueTrack: target? target.value : '',
        })
    }
  render() {
    return (
        <Track 
            values={this.state}
            handlerTrack={this.handlerTrack}
            handlerChangeInput={this.handlerChangeInput}
        />
    )
  }
}

export default connectStoreon( 
    
    TrackContainer
)