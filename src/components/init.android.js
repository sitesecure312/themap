
import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import * as Progress from 'react-native-progress'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';

var { height, width } = Dimensions.get('window');

// map redux store to props
function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

// map actions to props
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      Auth: bindActionCreators(AuthAction, dispatch),
    }
  }
}

class Init extends Component {
  componentDidMount() {
    setTimeout(() => {
      AuthAction.getSessionToken()
        .then((token) => {
          if (token) {
            Actions.takepicture();            
          } else {
            Actions.login();
          }
        })
        .catch((error) => {
          console.log(error);
          Actions.login();
        })
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>The Map</Text>
        <Image
          style={styles.logo}
          source={require('../assets/splash_logo.png')}>
          <Progress.CircleSnail size={206} thickness={6} color={['white']} />
        </Image>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: 10,
    backgroundColor: '#042313'
  },
  headerTitle: {
    marginTop: 50,
    fontSize: 36,
    fontWeight: "500",
    color: '#FFF'
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 100
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Init);
