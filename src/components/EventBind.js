import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello!"
        }
        // this.clickHandler = this.clickHandler.bind(this) //Approach three
    }

    clickHandler = () => { 
        if(this.state.message === "Hello!")
        {
            this.setState({
                message:"Goodbye!"
            })
        }
        else
        {
            this.setState({
                message:"Hello!"
            })
        }
    } //For approach four


    // clickHandler() { 
    //     if(this.state.message === "Hello!")
    //     {
    //         this.setState({
    //             message:"Goodbye!"
    //         })
    //     }
    //     else
    //     {
    //         this.setState({
    //             message:"Hello!"
    //         })
    //     }
    // } //For approaches one two and three
    
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.clickHandler.bind(this)}>Click!</button> */} {/* Approach One */}
                {/* <button onClick={() => this.clickHandler()}>Click!</button> */} {/*Approach two*/}
                {/* <button onClick={this.clickHandler}>Click!</button> */} {/*Approach three*/}
                <button onClick={this.clickHandler}>Click!</button>
            </div>
        )
    }
}

export default EventBind
