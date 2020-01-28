// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {

    constructor(props){
        super(props)

        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    bombExplosion = () => {
        if(this.state.secondsLeft === 0){
            return <p>Boom!</p>
        }else{
            return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }
    }

    render() {
        return (
            <div>
                <p>{this.bombExplosion()}</p>
            </div> 
        );
    }
}

export default Bomb;