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
});

class SphIns extends Component{
    constructor(props){
        super(props);
        this.state = {
            X: this.props.X,
            Y: this.props.Y,
            Z: this.props.Z,
            eye: this.props.eye,
        };
        this.setState({
            X: this.state.X + 0.75,
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.description}>
                Sphere will establish both parts of the two axes as close as possible to the plane of the retina
                Occlude one eye
                "Fog" the patient by placing {this.state.X}
                </Text>
            </View>
        );
    }
}

module.exports = SphIns;