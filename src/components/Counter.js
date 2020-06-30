import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
    }

    increment() {
        this.setState((prevState) => (
            {
                counter:prevState.counter+1
            }
        ))
    }

    incrementFiveTimes() {
        for( var i=0; i<5; i++) {
            this.increment()
        }
    }
    
    render() {
        return (
            <div>
                <p>Counter: {this.state.counter}</p>
                <button onClick={() => this.incrementFiveTimes()}>Increment</button>
            </div>
        )
    }
}

export default Counter
