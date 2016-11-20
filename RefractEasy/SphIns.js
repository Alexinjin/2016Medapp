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
        alignItems: 'center',
        marginTop: 80,
        padding: 15,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    description: {
        fontSize: 15,
        textAlign: 'center',
        flex: 1,
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

var SphTest = require('./SphTest');

class SphIns extends Component{
    constructor(props){
        super(props);
        this.state = {
            X: this.props.X + 0.75,
            Y: this.props.Y,
            Z: this.props.Z,
            eye: this.props.eye,
        };
    }

    onNextPressed(){
        this.props.navigator.push({
            title: 'Sphere Test',
            component: SphTest,
            passProps: {
                X: this.state.X,
                Y: this.state.Y,
                Z: this.state.Z,
                eye: this.state.eye,
            },
        });
    }


    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.description}>
                Sphere will establish both parts of the two axes as close as possible to the plane of the retina
                Occlude one eye
                "Fog" the patient by placing {this.state.X}
                Ask patient to read the chart
                (pt should not see better than 20/30)
                </Text>
                <TouchableHighlight style={styles.button}
                    onPress={this.onNextPressed.bind(this)}>
                    <Text style={styles.buttonText}>
                        NEXT
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = SphIns;