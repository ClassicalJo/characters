import logo from './logo.svg';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import Home from "./home"
import Character from "./character"
import './App.css';

import PrivateRoute from './PrivateRoute';
import Login from './login';
import Provider from './dataContext';
import { AuthContext } from "./dataContext/auth"
import Context from './dataContext/context'
import { useContext, useState } from 'react';
import NotFound from './notfound';

function App() {
  const existingToken = localStorage.getItem("tokens")
  const [authTokens, setAuthTokens] = useState(existingToken)
  const database = useContext(Context)
  const setTokens = data => {
    localStorage.setItem("tokens", data)
    setAuthTokens(data)
  }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Provider value={database}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/viktor" component={Character} player={"viktor"} />
              <PrivateRoute path="/selene" component={Character} player={"selene"} />
              <PrivateRoute path="/talor" component={Character} player={"talor"} />
              <PrivateRoute path="/tobias" component={Character} player={"tobias"} />
              <PrivateRoute path="/helena" component={Character} player={"helena"} />
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </AuthContext.Provider>
  );
}

export default App;
