import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Cmp, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Route
      {...rest}
      render={(props) =>
        userInfo ? <Cmp {...props} /> : <Redirect to={'/'} />
      }
    />
  );
};

export default PrivateRoute;
