import axios from 'axios';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  CHECK_LOGGED_IN_REQUEST,
  CHECK_LOGGED_IN_SUCCESS,
  CHECK_LOGGED_IN_FAIL,
  USER_DATA_FAIL,
  USER_DATA_SUCCESS,
  USER_DATA_REQUEST,
} from '../constants/user';

export const login = (name, email, imageUrl) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      'http://localhost:5000/user/login',
      { name, email, imageUrl },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    sessionStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = (email) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  await axios.post('http://localhost:5000/user/check', { email }, config);
  sessionStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};

export const isAlreadyLoggedIn = (email) => async (dispatch) => {
  try {
    dispatch({
      type: CHECK_LOGGED_IN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('http://localhost:5000/user/check', {
      email,
      config,
    });

    dispatch({
      type: CHECK_LOGGED_IN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CHECK_LOGGED_IN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserData = (email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_DATA_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('http://localhost:5000/user/getuser', {
      email,
      config,
    });

    dispatch({
      type: USER_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
