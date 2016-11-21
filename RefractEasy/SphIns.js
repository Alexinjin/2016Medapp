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
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
    },
    description: {
        fontSize: 20,
        // textAlign: 'center',
        color: '#2077E8',
        flex: 1,
    },
    button: {
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderRadius: 8,
        // borderWidth: 2,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'lightslategray',
        textShadowOffset: {width: 3, height: 3,},
        textShadowRadius: 10,
    },
});

var SphTest = require('./SphTest');

class SphIns extends Component{
    constructor(props){
        super(props);
        this.state = {
            X: this.props.X + 0.75,
            Y: this.props.Y,
            Z: this.props.Z,
        };
        console.log('SphIns: x: ' + this.state.X + ', y: ' + this.state.Y + ', z: ' + this.state.Z);
    }

    onNextPressed(){
        this.props.navigator.push({
            title: 'Sphere',
            component: SphTest,
            passProps: {
                X: this.state.X,
                Y: this.state.Y,
                Z: this.state.Z,
            },
        });
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={{flex: 2,}}>
                </View>
                <Text style={styles.description}>
                1. Sphere will establish both parts of the two axes as close as possible to the plane of the retina
                </Text>
                <Text style={styles.description}>
                2. Occlude one eye
                </Text>
                <Text style={styles.description}>
                3. "Fog" the patient by placing {this.state.X}
                </Text>
                <Text style={styles.description}>
                4. Ask patient to read the chart
                </Text>
                <Text style={styles.description}>
                (pt should not see better than 20/30)
                </Text>
                <View style={{flex: 3,}}>
                </View>
                <TouchableHighlight style={styles.button}
                    onPress={this.onNextPressed.bind(this)}
                    underlayColor='#7AD8FF'>
                    <Text style={styles.buttonText}>
                        NEXT
                    </Text>
                </TouchableHighlight>
                <View style={{flex: 1,}}>
                </View>
            </View>
        );
    }
}

module.exports = SphIns;