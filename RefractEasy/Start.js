'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native';

var EnterXYZ = require('./EnterXYZ');
var styles = StyleSheet.create({
    container: {
        padding: 30,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
    },
    description: {
        fontSize: 30,
        textAlign: 'center',
        color: '#2077E8',
        fontWeight: 'bold',
        flex: 1,
    },
    image: {
        width: 320,
        height: 154,
    },
    button: {
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderRadius: 8,
        // borderWidth: 2,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
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
    imgBox: {
        flex: 3,
        alignItems: 'center',
    }
});


class Start extends Component {
    constructor(props){
        super(props);
        this.state = {
            X: this.props.X,
            Y: this.props.Y,
            Z: this.props.Z,
        };
        console.log('Start: x: ' + this.state.X + ', y: ' + this.state.Y + ', z: ' + this.state.Z);
    }

    onStartPressed(){
        this.props.navigator.push({
            title: 'Input XYZ',
            component: EnterXYZ,
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
                <Text style={styles.description}>Refraction Guide</Text>
                <View style={styles.imgBox}>
                    <Image source={require('./Resources/Start-eyes.png')}
                            style={styles.image}/>
                </View>
                <TouchableHighlight style={styles.button}
                    onPress={this.onStartPressed.bind(this)}
                    underlayColor='#7AD8FF'>
                    <Text style={styles.buttonText}>
                        Begin Test
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = Start;