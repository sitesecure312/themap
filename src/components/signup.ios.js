
import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';
import Header from '../widgets/header'
import Button from '../widgets/button'
import button from '../styles/button'
import Dimensions from 'Dimensions'

var {height, width} = Dimensions.get('window')

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

class Signup extends Component {
  state = {
    email: null,
    fullname: null,
    password: null,
    mobile: null,
    name: null,
    initialPosition: null,
    lastPosition: null,
    modal: false,
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  signup(email, fullname, password) {
    this.props.actions.Auth.signup(email, fullname, password);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={false} width={width} height={height}>
          <View>
            <Header />

            <View style={styles.formTitle}>
              <Text style={styles.formTitleText}>SIGNUP</Text>
            </View>
            <View style={styles.inputs}>
              <View style={styles.loginForm}>
                <View style={styles.inputField}>
                  <View style={styles.iconArea}>
                    <Image style={styles.userIcon}
                      source={require('../assets/user.png')}
                    />
                  </View>
                  <View style={styles.textArea}>
                    <TextInput
                      placeholder="Fullname"
                      placeholderTextColor="#4B7D62"
                      style={styles.input}
                      underlineColorAndroid='transparent'
                      autoCorrect={false}
                      onChangeText={(value) => this.setState({fullname: value})}>
                    </TextInput>
                  </View>
                </View>
                <View style={styles.inputField}>
                  <View style={styles.iconArea}>
                    <Image style={styles.emailIcon}
                      source={require('../assets/email.png')}
                    />
                  </View>
                  <View style={styles.textArea}>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor="#4B7D62"
                      style={styles.input}
                      underlineColorAndroid='transparent'
                      autoCorrect={false}
                      onChangeText={(value) => this.setState({email: value})}>
                      </TextInput>
                  </View>
                </View>
                <View style={styles.inputField}>
                  <View style={styles.iconArea}>
                    <Image style={styles.passwordIcon}
                      source={require('../assets/password.png')}
                    />
                  </View>
                  <View style={styles.textArea}>
                    <TextInput
                      placeholder="Password"
                      secureTextEntry={true}
                      placeholderTextColor="#4B7D62"
                      style={styles.input}
                      underlineColorAndroid='transparent'
                      autoCorrect={false}
                      onChangeText={(value) => this.setState({password: value})}>
                      </TextInput>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.buttonsArea}>
              <Button text="CREATE ACCOUNT" underlayColor="#3e549c" style={button.createAccountButton} onPress={() => this.signup(this.state.fullname, this.state.email, this.state.password)} />
              <Button text="CANCEL" underlayColor="#3e549c" style={button.signupButton} onPress={()=>Actions.login()} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#042313'
  },
  formTitle: {
    marginBottom: 30,
  },
  formTitleText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFF'
  },
  inputField: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  iconArea: {
    width: 40,
    height: 40,
    backgroundColor: '#0F3621',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userIcon: {
    width: 20,
    height: 20,
  },
  emailIcon: {
    width: 25,
    height: 20
  },
  passwordIcon: {
    width: 20,
    height: 25
  },
  textArea: {
    width: width - 80,
    height: 40,
    borderBottomColor: '#0F3621',
    borderBottomWidth: 1
  },
  input: {
    height: 40,
    fontSize: 18,
    color: '#FFF',
    borderBottomColor: '#042313',
    borderBottomWidth: 0
  },
  buttonsArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 40
  },
  button: {
    flex: 0.5
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
