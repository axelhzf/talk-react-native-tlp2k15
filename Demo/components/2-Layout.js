var React = require('react-native');
var { StyleSheet, Text, View, Image} = React;

var Layout = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: 'http://img2.wikia.nocookie.net/__cb20111004203534/adventuretimewithfinnandjake/images/b/b3/Jake.png'}}
          />
        <Text style={styles.welcome}>
          Hello world 2
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
    backgroundColor: '#F5FCFF',
    flexDirection: "row"
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    flex: 1
  },
  image: {
    width: 135,
    height: 210
  }
});

module.exports = Layout;