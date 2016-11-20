'use strict';
var React = require('react'); //sign to variable
var ReactNative = require('react-native'); //sign to variable

var styles = ReactNative.StyleSheet.create({
	text:{
		color: 'black',
		backgroundColor:'white',
		fontSize: 30,
		margin: 20
	},
	container:{
		flex:1
	}
});
class Display extends React.Component{
	render(){
		return React.createElement(ReactNative.Text, {style: styles.text}, "\n\nAdd 0.25 CYL, so that Y = Y + 0.25.\nYou're done with Cylinder refinement");
	}
}
class PropertyFinderApp extends React.Component{
	render(){
		return (
			<ReactNative.NavigatorIOS
			style = {styles.container}
			initialRoute={{
				title: 'MedApp',
				component: Display,
			}}/>
		);
	}
}



ReactNative.AppRegistry.registerComponent('AwesomeProject', function() { return PropertyFinderApp });
