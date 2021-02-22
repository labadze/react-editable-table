import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import './w3.css';
import LoginPage from "./pages/LoginPage";
import TopNav from "./components/TopNav";
import AccountPage from "./pages/AccountPage";
import TablePage from "./pages/TablePage";
import TableViewPage from "./pages/TableViewPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: Date.now().toString(),
      userObj: {}
    };
  }

  async componentDidMount() {
    // localStorage.setItem('_r_usr_access_token', 'liz_11')
    if (localStorage.getItem('_r_usr_access_token') !== null) {
      this.setState({
        accessToken: localStorage.getItem('_r_usr_access_token')
      });
      // await this.getCurrentUser();
    }
  }

  getCurrentUser = async() => {
    if (localStorage.getItem('_r_usr_access_token') !== null) {
      let token = localStorage.getItem('_r_usr_access_token');
      try {
        let response = await fetch(
            'http://127.0.0.1:5000/me/',  //this.props.match.params.id,
            {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
              }
            }
        );
        let responseJson = await response.json();
        if (responseJson) {
          if (response.status === 401 || response.status === 403) {
            localStorage.removeItem('_r_usr_access_token');
            window.location.reload();
          } else {
            this.setState({
              userObj: responseJson
            });
            // return responseJson;
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  logOut = async() => {
    if (localStorage.getItem('_r_usr_access_token') !== null) {
      localStorage.removeItem('_r_usr_access_token');
      window.location.href = '/';
    }
  };

  render() {
    return (
        <Router>
          {this.state.accessToken === null ? (
              <div>
                <Route name={"Login"} exact path={'/'} component={LoginPage}/>
              </div>
          ) : (
              <div>
                <TopNav logOff={this.logOut}/>
                <Route name={"TableView"} exact path={"/"} component={TableViewPage}/>
                <Route name={'Table'} exact path={'/table'} component={TablePage} />
                {/*<Route name={"account"} exact path={"/account"} component={AccountPage}/>*/}
              </div>
          )}
        </Router>
    );
  }
}

export default App;
