import './App.css';
import Header from './components/Header.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/about'
import Try from './components/try'
import SignUp from'./components/sign-up'
import Home from './components/home.js'
import {createHashHistory } from 'history'

function App() {
  return (
    <Router history={createHashHistory}>

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
                <Route path="/try" component={Try}>
                   <Try />
                </Route>
                 <Route path="/" component={Home}>
                  < Home/>
                </Route>
            </Switch>
    <div className="App">
        <Header/>
    </div>
    </Router>
  );
}

export default App;
