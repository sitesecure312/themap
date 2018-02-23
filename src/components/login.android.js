
import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';
import Header from '../widgets/header';
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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      isFetching: false,
    }
  }

  componentDidMount() {
  }

  login(username, password) {
    this.setState({isFetching: true});
    this.props.actions.Auth.login(username, password);
  }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView horizontal={false} width={width} height={height}>
          <View>
            <Header />

            <View style={styles.formTitle}>
              <Text style={styles.formTitleText}>LOGIN</Text>
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
                      placeholder="Email"
                      placeholderTextColor="#4B7D62"
                      style={styles.input}
                      underlineColorAndroid='transparent'
                      autoCorrect={false}
                      onChangeText={(value) => this.setState({username: value})}>
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
                      placeholderTextColor="#4B7D62"
                      secureTextEntry={true}
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
              <Button
                disabled={this.state.isFetching}
                text="LOGIN"
                underlayColor="#3e549c"
                style={button.loginButton}
                onPress={() => this.login(this.state.username, this.state.password)} />
              <Button
                disabled={this.state.isFetching}
                text="SIGNUP"
                underlayColor="#3e549c"
                style={button.signupButton}
                onPress={()=>Actions.signup()} />
            </View>
            {this.state.isFetching ? <ActivityIndicator animating size='large' /> : null}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#042313'
  },
  formTitle: {
    marginTop: 20,
    marginLeft: 20,
  },
  formTitleText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFF'
  },
  inputs: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20
  },
  buttonsArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    flex: 0.5
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  loginForm: {
    flex: 1,
    marginTop: 30,
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
