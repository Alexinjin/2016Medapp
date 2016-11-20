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
        alignItems: 'center',
        marginTop: 80,
        padding: 15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    description: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 30,
        flex: 1,
    },
    inputBox: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        flex: 4,
    },
    button: {
        marginTop: 50,
        height: 36,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        flex: 1,
    },
    buttonText: {
        fontSize: 18,
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
            eye: this.props.eye,
        };
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
            title: 'Establish sphere power',
            component: SphIns,
            passProps: {
                X: this.state.X,
                Y: this.state.Y,
                Z: this.state.Z,
                eye: this.state.eye,
            },
        });
    }

    render(){
        return (
            <View style={styles.container}>
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
                        placeholder='Axis'/>
                </View>
                <TouchableHighlight style={styles.button}
                    onPress={this.onBeginPressed.bind(this)}
                    underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>
                        Begin Refraction
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}




module.exports = EnterXYZ;
