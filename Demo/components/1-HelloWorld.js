var React = require('react-native');
var { StyleSheet, Text, View} = React;

var HelloWorld = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello world
        </Text>
      </View>
    );
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
    fontSize: 60,
    textAlign: 'center',
    margin: 10
  }
});

module.exports = HelloWorld;