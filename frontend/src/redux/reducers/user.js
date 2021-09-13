import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  CHECK_LOGGED_IN_REQUEST,
  CHECK_LOGGED_IN_SUCCESS,
  CHECK_LOGGED_IN_FAIL,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  USER_DATA_FAIL,
} from '../constants/user';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const checkAlreadyLoggedInReducer = (state = {}, action) => {
  switch (action.type) {
    case CHECK_LOGGED_IN_REQUEST:
      return { loading: true };
    case CHECK_LOGGED_IN_SUCCESS:
      return { loading: false, userLoggedIn: action.payload };
    case CHECK_LOGGED_IN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getUserDataReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DATA_REQUEST:
      return { loading: true };
    case USER_DATA_SUCCESS:
      return { loading: false, userData: action.payload };
    case USER_DATA_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
