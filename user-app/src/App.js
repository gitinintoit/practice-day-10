// import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import About from './components/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/about">About </Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>

          </div>
        </nav>

        {
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Message />
            </Route>
            <Route path="/">
              <UserForm />
              <UserList />
            </Route>
          </Switch>
        }
      </div>
    </Router>

    // <div>
    //   <UserForm />
    //   <UserList />
    // </div>
  );
}

export default App;
