// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {

    constructor(props){
        super(props)

        this.state = {
            secondsLeft: props.initialCount
        }
    }

    // longer way to do it
    bombExplosion = () => {
        if(this.state.secondsLeft === 0){
            return <p>Boom!</p>
        }else{
            return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }
    }

    render() {
        return (
        <div>{this.bombExplosion()}</div>
        )
    }

    // fastest way to do it
    // render() {
    //     const bombExplosion = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    //     return (
    //         <div>{bombExplosion}</div> 
    //     );
    // }
}

export default Bomb;