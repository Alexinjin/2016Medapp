'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2077E8',
        flex: 1,
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        flex: 1,
    },
    button: {
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderRadius: 8,
        borderWidth: 2,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    inputBox: {
        height: 36,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
        flex: 1,
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
        alignSelf: 'center'
    },
});

var SphIns = require('./SphIns');


class EnterXYZ extends Component {
    constructor(props){
        super(props);
        this.state = {
            X: this.props.X,
            Y: this.props.Y,
            Z: this.props.Z,
        };
        console.log('EnterXYZ: x: ' + this.state.X + ', y: ' + this.state.Y + ', z: ' + this.state.Z);
    }

    onXChanged(event){
        this.setState({ X: parseFloat(event.nativeEvent.text) });
    }

    onYChanged(event){
        this.setState({ Y: parseFloat(event.nativeEvent.text) });
    }

    onZChanged(event){
        this.setState({ Z: parseFloat(event.nativeEvent.text) });
    }

    onBeginPressed(){
        this.props.navigator.push({
            title: 'Sphere',
            component: SphIns,
            passProps: {
                X: this.state.X,
                Y: this.state.Y,
                Z: this.state.Z,
            },
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={{flex: 1,}}>
                </View>
                <Text style={styles.description}>
                    Input previous prescription/ AR Findings/ Retinoscopy
                </Text>
                <View style={styles.flowRight}>
                    <TextInput style={styles.inputBox}
                        onChange={this.onXChanged.bind(this)}
                        keyboardType='number-pad'
                        placeholder='Sph'/>
                    <TextInput style={styles.inputBox}
                        onChange={this.onYChanged.bind(this)}
                        keyboardType='number-pad'
                        placeholder='Cyl'/>
                    <TextInput style={styles.inputBox}
                        onChange={this.onZChanged.bind(this)}
                        keyboardType='number-pad'
                        placeholder='Axis'/>
                </View>
                <TouchableHighlight style={styles.button}
                    onPress={this.onBeginPressed.bind(this)}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>
                        Begin Refraction
                    </Text>
                </TouchableHighlight>
                <View style={{flex: 4,}}>
                </View>
            </View>
        );
    }
}




module.exports = EnterXYZ;
