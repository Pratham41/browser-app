import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/Dashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
  return (
    <Router>
      <PublicRoute path="/" component={LoginScreen} exact />
      <PrivateRoute path="/dashboard" component={Dashboard} exact />
    </Router>
  );
}

export default App;
