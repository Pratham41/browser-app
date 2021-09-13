import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Cmp, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(rest);
  return (
    <Route
      {...rest}
      render={(props) =>
        !userInfo ? <Cmp {...props} /> : <Redirect to={'/dashboard'} />
      }
    />
  );
};

export default PublicRoute;
