import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userLoginReducer,
  checkAlreadyLoggedInReducer,
  getUserDataReducer,
} from './redux/reducers/user';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  checkLogin: checkAlreadyLoggedInReducer,
  getUserDetails: getUserDataReducer,
});

const userInfoFromStorage = sessionStorage.getItem('userInfo')
  ? JSON.parse(sessionStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
