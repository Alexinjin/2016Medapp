'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
} from 'react-native';

var styles = StyleSheet.create({
    description: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 30,
    },
    container: {
        alignItems: 'center',
        marginTop: 80,
        padding: 15,
    },
});

class EnterXYZ extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                Input previous prescription/ AR Findings/ Retinoscopy
                </Text>
            </View>
        );
    }
}




module.exports = EnterXYZ;
