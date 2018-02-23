
import React from 'react'
import {Dimensions, StyleSheet, View, Image, Text, Component} from 'react-native'

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 10
  },
  header: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  mark: {
    height: 55,
    width: 55
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "600",
    color: '#FFF'
  }
});

module.exports = class Header extends React.Component {
  render() {
    return (
        <View style={styles.header}>
            <Image style={styles.mark}
              source={require('../assets/TheMapLogo.png')}
            />
            <Text style={styles.headerTitle}>The Map</Text>
        </View>
    );
  }
};
