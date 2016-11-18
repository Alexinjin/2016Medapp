'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
    },
});


class Start extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>TEST</Text>
            </View>
        );
    }
}

module.exports = Start;