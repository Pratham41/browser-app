import React from 'react';
import { Container, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/user';

const Dashboard = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout(userInfo.email));
    history.push('/');
  };

  return (
    <Container className="text-center my-5 py-5 ">
      <Container className="text-center text-primary my-5 py-5 shadow bg-light">
        <h1>
          Hello <span className="text-success">{userInfo.name}</span> you have
          succesfully logged in !
        </h1>
        <Button className="btn btn-danger my-2 py-2" onClick={logoutHandler}>
          LOG OUT
        </Button>
      </Container>
    </Container>
  );
};

export default Dashboard;
