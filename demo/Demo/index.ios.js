/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  //Image,
  //SwitchIOS
} = React;

var Demo = React.createClass({

  getInitialState() {
    return {switchIsOn : true}
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );


    /*
    <Image
      style={styles.logo}
      source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
      />
      */

    /*
    <Text style={styles.text} >
      {this.state.switchIsOn ? "Activo" : "Inactivo"}
    </Text>
    <SwitchIOS
      onValueChange={(value) => this.setState({switchIsOn: value})}
      value={this.state.switchIsOn} />
    */


  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  logo: {
    width: 100,
    height: 100
  }
});

AppRegistry.registerComponent('Demo', () => Demo);
