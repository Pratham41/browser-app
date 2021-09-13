import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import { login, logout } from '../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const LoginScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/');
    } else {
      if (userInfo.isLoggedIn) {
        const Y = window.confirm('already login continue in this tab ?');
        if (Y) {
          history.push('/dashboard');
        } else {
          dispatch(logout(userInfo.email));
          history.push('/');
        }
      }
    }
  }, [history, userInfo, dispatch]);

  const handleSuccessLogin = async (response) => {
    const { name, email, imageUrl } = response.profileObj;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post('http://localhost:5000/user/getuser', {
      email,
      config,
    });

    if (data.isLoggedIn) {
      const Y = window.confirm('already login continue in this tab ?');
      if (Y) {
        console.log('data');
        console.log(data);

        debugger;
        dispatch(login(data.name, data.email, data.imageUrl));
        history.push('/dashboard');
      } else {
        history.push('/');
      }
    } else {
      dispatch(login(name, email, imageUrl));
    }
  };

  const handleFailLogin = (response) => {
    console.log(response);
  };

  return (
    <Container className="text-center my-5 py-5 ">
      <Container className="text-center my-5 py-5 shadow bg-light">
        <h1 className="text-success">Sign in Here</h1>

        <GoogleLogin
          className="mt-2 text-center"
          clientId="329337993518-jg5koj5visrnn02omljjhjjeosgn9nai.apps.googleusercontent.com"
          clientSecret="s3_oxAGuDQ1_CjDEhHXBlyfW"
          buttonText="Log in with Google"
          onSuccess={handleSuccessLogin}
          onFailure={handleFailLogin}
          cookiePolicy={'single_host_origin'}
          theme="dark"
        />
      </Container>
    </Container>
  );
};

export default LoginScreen;
