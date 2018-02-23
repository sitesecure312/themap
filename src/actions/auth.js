
import React from 'react';
import { Actions } from 'react-native-router-flux';
import store from 'react-native-simple-store';
import config from '../lib/config';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,

  POST_REQUEST,
  POST_SUCCESS,
  POST_FAILURE,
} = require('../lib/constants').default;

export function login(username, password) {
  return dispatch => {
    var bodyData = 'grant_type=password&username=' + username + '&password=' + password;
    var request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: bodyData
    };
    let url = config.HOST_API.url + 'Token';
    fetch(url, request)
      .then((res) => {
        var response = JSON.parse(res._bodyInit);        
        if (res.status === 200 || res.status === 201) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: {username, password}},
          });
          saveSessionToken(response.access_token);
          Actions.takepicture();
        } else {
          alert(response.error_description);
        }
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: error
        });
      });
  }
}

export function signup(email, fullname, password) {
  return dispatch => {
    var params = {
      Email: email,
      Fullname: fullname,
      Password: password,
      RedirectUrl: 'http://www.themap.io/auth/confirmation'
    };
    var request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'http://www.themap.io/auth/signup'
      },
      body: JSON.stringify(params)
    };
    
    let url = config.HOST_API.url + 'api/Account/Register';

    fetch(url, request)
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData.message == "ok") {
          alert("User created successfully!");
          dispatch({
            type: SIGNUP_SUCCESS,
            payload: {user: {email, password}}
          });
          Actions.takepicture();
        } else {
          alert(responseData.ModelState[""]);
        }
      })
      .catch((error) => {
        dispatch({
          type: SIGNUP_FAILURE,
          payload: error
        });
      });
  }
}

export function saveSessionToken(token) {
  return store.save(config.SESSION_TOKEN_KEY, token);
}

export function getSessionToken() {
  return store.get(config.SESSION_TOKEN_KEY);
}
