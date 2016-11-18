'use strict';

var React = require('react');
var ReactNative = require('react-native');

var Start = require('./Start');

var styles = ReactNative.StyleSheet.create({
    containter: {
        flex: 1
    }
});

class RefractEasyApp extends React.Component {
    render() {
        return (
            <ReactNative.NavigatorIOS
            style={styles.containter}
            initialRoute={{
                title: 'Refract Easy',
                component: Start,
            }}/>
        );
    }
}

ReactNative.AppRegistry.registerComponent('RefractEasy', () => RefractEasyApp );