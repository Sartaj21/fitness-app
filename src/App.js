import './App.css';
import Header from './components/Header.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/about'
import Try from './components/try'
import SignUp from'./components/sign-up'
function App() {
  return (
    <Router>

            <Switch>
                <Route path="/about" component>
                    <About />
                </Route>
                <Route path="/login" component>
                  <Try />
                </Route>
                <Route path="/join" component>
                  <SignUp />
                </Route>
                <Route path="/try"component>
                  <Try />
                </Route>
            </Switch>
    <div className="App">
        <Header/>
    </div>
    </Router>
  );
}

export default App;
