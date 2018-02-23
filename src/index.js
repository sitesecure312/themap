
import React, { Component } from 'react';
import { Router, Reducer, Scene } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthAction from './actions/auth';

import Init from './components/init';
import Login from './components/login';
import Signup from './components/signup';
import TakePicture from './components/takepicture';
import PostComment from './components/postcomment';
import TagMap from './components/tagmap';

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

const reducerCreate = params => {
  const defaultReducer = Reducer(params);

  return (state, action) => {
    console.log("ROUTER ACTION: ", action);
    return defaultReducer(state, action);
  }
}

export default class themap extends Component {
  render() {
    return(
      <Router createReducer={reducerCreate}>
        <Scene key="root" hideNavBar>
          <Scene key="init" component={Init} title="Init" initial />
          <Scene key="login" component={Login} title="Login" type="replace" />
          <Scene key="signup" component={Signup} title="Signup" type="replace" />
          <Scene key="takepicture" component={TakePicture} title="TakePicture" type="replace" />
          <Scene key="postcomment" component={PostComment} title="PostComment" type="replace" />
          <Scene key="tagmap" component={TagMap} title="TagMap" type="replace" />
        </Scene>
      </Router>
    );
  }
}
