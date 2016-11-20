'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

var EnterXYZ = require('./EnterXYZ');
var styles = StyleSheet.create({
    container: {
        marginTop: 120,
        padding: 30,
        alignItems: 'center',
    },
    description: {
        marginBottom: 50,
        fontSize: 30,
        textAlign: 'center',
        color: '#2077E8',
    },
    image: {
        width: 320,
        height: 154,
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    smallTexts: {
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'paleturquoise',
        fontWeight: 'bold',
        flex: 1,
        padding: 10,
        borderWidth: 2,
        borderColor: 'paleturquoise',
        textShadowColor: 'lightseagreen',
        textShadowOffset: {width: 3, height: 3,},
        textShadowRadius: 10,
    },
    dataText: {
        fontSize: 15,
        textAlign: 'center',
        textShadowColor: 'gray',
        textShadowOffset: {width: 1, height: 1,},
        textShadowRadius: 10,
    },
    flowDown: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
});


class Start extends Component {
    constructor(props){
        super(props);
        this.state = {
            rightX: 0,
            rightY: 0,
            rightZ: 0,
            leftX: 0,
            leftY: 0,
            leftZ: 0,
        };
    }

    onStartRight(){
        this.props.navigator.push({
            title: 'Input Initial Values',
            component: EnterXYZ,
            passProps: {
                X: this.state.rightX,
                Y: this.state.rightY,
                Z: this.state.rightZ,
                eye: 'right',
            },
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.description}>Press one eye to begin</Text>
                <Image source={require('./Resources/Start-eyes.png')} style={styles.image}/>
                <View style={styles.flowRight}>
                    <Text style={styles.smallTexts}
                        onPress={this.onStartRight.bind(this)}>
                        Right
                    </Text>
                    <Text style={styles.smallTexts}>
                        Left
                    </Text>
                </View>
                <View style={styles.flowRight}>
                    <View style={styles.flowDown}>
                        <Text style={styles.dataText}>Sph = {this.state.rightX}
                        </Text>
                        <Text style={styles.dataText}>Cyl = {this.state.rightY}
                        </Text>
                        <Text style={styles.dataText}>Axis = {this.state.rightZ}
                        </Text>
                    </View>
                    <View style={styles.flowDown}>
                        <Text style={styles.dataText}>Sph = {this.state.leftX}
                        </Text>
                        <Text style={styles.dataText}>Cyl = {this.state.leftY}
                        </Text>
                        <Text style={styles.dataText}>Axis = {this.state.leftZ}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

module.exports = Start;