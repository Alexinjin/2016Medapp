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

class SphTest extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.description}>
                gogogogo
                </Text>
            </View>
        );
    }
}

module.exports = SphTest;