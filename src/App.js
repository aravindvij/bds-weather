import './App.css';
import SignUpForm from './components/SignUpForm';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import Weather from './components/Weather';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/signin">
            <SignInForm />
          </Route>
          {/* <Route path="/home">
            <Home />
          </Route> */}
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/">
            <SignUpForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
