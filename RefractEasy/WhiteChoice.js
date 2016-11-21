'use strict';
import React, {Component} from 'react'
import{
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicator,
	Image
} from 'react-native';
var UpdateY = require('./UpdateY');
var WhitePressedUpdate = require('./WhitePressedUpdate');
var styles = StyleSheet.create({
	description:{
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'center',
		color: 'black'
	},
	container:{
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	},
	flowRight: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch'
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},
	button: {
		height: 36,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	searchInput: {
		height: 36,
		padding: 4,
		marginRight: 5,
		flex: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48BBEC',
		borderRadius: 8,
		color: '#48BBEC'
	}


});

class WhiteChoice extends Component{
	constructor(props){
    super(props);
    this.state = {
        X: 10,
        Y: 190,
        Z: 0,

    };
  }
	PressRed(){
    this.props.navigator.push({
      title: "Eye Completed",
      component: UpdateY,
      passProps: {
          X: this.state.X,
          Y: this.state.Y,
          Z: this.state.Z,
      },
    });
  }
  PressWhite(){
    this.props.navigator.push({
      title: "Eye Completed",
      component: WhitePressedUpdate,
      passProps: {
          X: this.state.rightX,
          Y: this.state.rightY,
          Z: this.state.rightZ,
      },
    });
  }
	render(){
		return(
			<View style={styles.container}>
			<Text style={styles.description}>
			Repeat JCC Flip with new values and ask patient which is better!</Text>
			<View style={styles.flowRight}>
			<TouchableHighlight style={styles.button}
				  onPress={this.PressRed.bind(this)}
			      underlayColor='blue'>
			    <Text style={styles.buttonText}>Red</Text>
			</TouchableHighlight>
			</View>
			<View style={styles.flowRight}>
			<TouchableHighlight style={styles.button}
				onPress={this.PressWhite.bind(this)}
			    underlayColor='blue'>
			    <Text style={styles.buttonText}>White</Text>
			</TouchableHighlight>
			</View>
			</View>
		);
	}
}

module.exports = WhiteChoice;

