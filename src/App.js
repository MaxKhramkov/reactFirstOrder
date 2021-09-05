import React, { Fragment, Component, } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Componets/layout/Navbar';
import UsersU from './Componets/users/UsersU';
import Search from './Componets/users/Search';
import Alert from './Componets/layout/Alert';
import About from './Componets/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  }

  // Search Github users
  searchUsers = async text => {
    this.setState({ loading: true, });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false, });
  };

  // Clear Github users from state
  clearUsers = () => this.setState({ users: [], loading: false, });

  // set Alert 
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type, } });
    setTimeout(() => this.setState({ alert: null }), 3000);
  }

  render() {
    const { users, loading, alert } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <UsersU loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
