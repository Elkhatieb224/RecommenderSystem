import React, { useEffect } from 'react';

import './App.css';
import Login from './Component/Login/login';
import Signup from './Component/Signup/Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Component/Nav/nav';
import home from './Component/Home/Home';
import Egy from './Component/Egy/Egy';
import EgyDetails from './Component/Egy/EgyDetails';
import NonEgy from './Component/NonEgy/NonEgy';
import NonEgyDetails from './Component/NonEgy/NonEgyDetails';
import Alert from './Component/layout/Alert';
import Dashboard from './Component/dashboard/Dashboard';
import CreateProfile from './Component/profile-forms/CreateProfile';
import EditProfile from './Component/profile-forms/EditProfile';
import PrivateRoute from './Component/routing/PrivateRoute';
import Quiz from './Component/profile-forms/Quiz';
import Recommender from './Component/profile-forms/Recommender';

// redux

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Nav />
          <Route exact path='/' component={home} />
          <Alert />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/Egy' component={Egy} />
            <Route exact path='/Egy/:id' component={EgyDetails} />
            <Route exact path='/NonEgy' component={NonEgy} />
            <Route exact path='/NonEgy/:id' component={NonEgyDetails} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute
              exact
              path='/Create-profile'
              component={CreateProfile}
            />

            <PrivateRoute exact path='/Edit-profile' component={EditProfile} />
            <PrivateRoute exact path='/quiz' component={Quiz} />
            <PrivateRoute exact path='/recommender' component={Recommender} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
