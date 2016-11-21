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

var WhiteLastUpdateY = require('./WhiteLastUpdateY');
var WhitePressedUpdate = require('./WhitePressedUpdate');


var styles = StyleSheet.create({
  container: {
      padding: 15,
      flexDirection: 'column',
      justifyContent: 'center',
      // alignItems: 'center',
      flex: 1,
  },
  title: {
    fontSize: 30,
    flex: 2.8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
      fontSize: 20,
      // textAlign: 'center',
      color: '#2077E8',
      flex: 5.5,
  },
  flowRight: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
  },

  flowDown: {
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'stretch',
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
  searchInput: {
    flex: 2,
    paddingLeft:4,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 10,
    color: '#48BBEC'
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
})

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
      component: WhiteLastUpdateY ,
      passProps: {
          X: this.state.X,
          Y: this.state.Y,
          Z: this.state.Z,
      },
    });
  }
  PressWhite(){
    this.props.navigator.pop({
      title: "Eye Completed",
      component: WhitePressedUpdate,
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
				<View style = {{flex:3,}}></View>
				<Text style={styles.description}>
				Repeat JCC Flip with new values and ask patient which is better!</Text>
				<TouchableHighlight style={styles.button}
					  onPress={this.PressRed.bind(this)}
				      underlayColor='#7AD8FF'>
				<Text style={styles.buttonText}>Red</Text>
				</TouchableHighlight>
				<View style = {{flex:0.3,}}></View>
				<TouchableHighlight style={styles.button}
					onPress={this.PressWhite.bind(this)}
				    underlayColor='#7AD8FF'>
				<Text style={styles.buttonText}>White</Text>
				</TouchableHighlight>
				<View style = {{flex:1,}}></View>
			</View>
		);
	}
}

module.exports = WhiteChoice;
