'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        // padding: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2077E8',
        flex: 1,
    },
    hugeButton: {
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
    },
    buttonText: {
        fontSize: 35,
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
});

var CylinderAxis = require('./CylinderAxis');

class SphTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            X: this.props.X,
            Y: this.props.Y,
            Z: this.props.Z,
            inPlus: false,
            inMinus: false,
        };
        console.log('SphTest: x: ' + this.state.X + ', y: ' + this.state.Y + ', z: ' + this.state.Z);
    }

    goToNext(){
        this.props.navigator.push({
            title: 'Cylinder',
            component: CylinderAxis,
            passProps: {
                X: this.state.X,
                Y: this.state.Y,
                Z: this.state.Z,
            },
        });
    }

    handlePlus(){
        if(this.inMinus){
            this.goToNext();
        }
        else{
            console.log('on plus: x was: ' + this.state.X);
            this.setState({X:this.state.X + 0.25, Y: this.state.Y, Z: this.state.Z,});
            this.inPlus = true;
            console.log('x become: ' + this.state.X);
        }
    }

    handleMinus(){
        if(this.inPlus){
            this.goToNext();
        }
        else{
            console.log('on minus: x was: ' + this.state.X);
            this.setState({X:this.state.X - 0.25, Y: this.state.Y, Z: this.state.Z,});
            this.inMinus = true;
            console.log('x become: ' + this.state.X);
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex: 1,}}>
                </View>
                <Text style={styles.description}>
                    Press the preferred sphere value
                </Text>
                <TouchableHighlight style={styles.hugeButton}
                    underlayColor='#7AD8FF'
                    onPress={this.handlePlus.bind(this)}>
                    <Text style={styles.buttonText}>
                        {this.state.X}
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.hugeButton,
                                 {backgroundColor: 'orangered'}]}
                    underlayColor='#FF7D4D'
                    onPress={this.handleMinus.bind(this)}>
                    <Text style={styles.buttonText}>
                        {this.state.X - 0.25}
                    </Text>
                </TouchableHighlight>
                <View style={{flex: 1,}}>
                </View>
            </View>
        );
    }
}

module.exports = SphTest;