
import { Actions } from 'react-native-router-flux';

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

const initialState = {
  user:         null,
  data:         null,
};

export default function AuthReducers(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user:   action.payload.user,
      });
      break;
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        user:   action.payload.user,
      });
      break;
    case POST_SUCCESS:
      return Object.assign({}, state, {
        data:   action.payload.data,
      });
      break;
    default:
      return state;
  }
}
