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
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         X: 0,
    //         Y: 0,
    //         Z: 0,
    //     };
    // }

    render() {
        return (
            <ReactNative.NavigatorIOS
            style={styles.containter}
            initialRoute={{
                title: 'Refract Easy',
                component: Start,
                passProps: {
                    X: 0,
                    Y: 0,
                    Z: 0,
                },
            }}/>
        );
    }
}

ReactNative.AppRegistry.registerComponent('RefractEasy', () => RefractEasyApp );