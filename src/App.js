import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Public from './components/Public';
import Private from './components/Private';
import Login from './components/Login';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <Router>
          <nav>
            <Link to="/public">Public</Link>
            <Link to="/private">Private</Link>
            <Link to="/login">Login</Link>
          </nav>
          <Switch>
            <Route path="/public" component={Public} />
            <PrivateRoute path="/private" component={Private} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
