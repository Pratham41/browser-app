import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import { logout } from './redux/actions/user';
import { useDispatch } from 'react-redux';

const InitialRender = () => {
  const doAction = async () => {
    const userInfo = sessionStorage.getItem('userInfo')
      ? JSON.parse(sessionStorage.getItem('userInfo'))
      : null;

    if (userInfo && document.visibilityState === 'visible') {
      const Y = window.confirm('already login index continue in this tab ?');

      if (Y === false) {
        userInfo && dispatch(logout(userInfo.email));
      } else {
      }
    }
  };

  const dispatch = useDispatch();

  document.addEventListener('visibilitychange', doAction);
  return <></>;
};

export default InitialRender;

ReactDOM.render(
  <Provider store={store}>
    <InitialRender />
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
