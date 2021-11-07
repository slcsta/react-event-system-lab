// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

    handleInputPassword = (event) => {
        console.log('Entering password...')
    }

    render() {
        return(
            <input type="password"  //on input add event handler that listens for keyUp event
                onKeyUp = {this.handleInputPassword}> 
            </input>
            )
        }

}