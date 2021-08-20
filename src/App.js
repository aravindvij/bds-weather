import './App.css';
import SignUpForm from './components/SignUpForm';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import Weather from './components/Weather';
import Home from './components/Home';
import Navbar from './components/NavBar';

function App() {

  return (
    <div>
      {/* {localStorage.getItem("token", 'true') && <Navbar></Navbar>} */}
      <BrowserRouter>
        <Switch>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/signin">
            <SignInForm />
          </Route>
          {/* {localStorage.getItem("token", 'true') ? */}
          <Route path="/home">
            <Home />
          </Route>
          {/* : <Redirect to="/signin" />} */}
          {/* {localStorage.getItem("token", 'true') ? */}
          <Route path="/weather">
            <Weather />
          </Route> :
            {/* // <Redirect to="/signin" />} */}
          <Route path="/">
            <SignUpForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
