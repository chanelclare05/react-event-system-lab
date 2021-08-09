// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    handlePassword = () => {
        return (
            console.log('entering password...')
        )
    }
    render(){
        return (
            <div>
                <input 
                type='password'
                onKeyUp={this.handlePassword}
                />
            </div>
        )
    }
};