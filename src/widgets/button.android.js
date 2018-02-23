
'use strict'

import React from 'react'
import {Component, Text, View, TouchableHighlight } from 'react-native'
import button from '../styles/button'

export default class Button extends React.Component {
    render() {
        return(
            <TouchableHighlight style={this.props.style} underlayColor={this.props.underlayColor} onPress={this.props.onPress}>
                <Text style={button.buttonText}>{this.props.text}</Text>
            </TouchableHighlight> 
        );
    }    
}
