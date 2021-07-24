import './App.css';
import Header from './components/Header.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home'
function App() {
  return (
    <Router>

            <Switch>
                <Route path="/about" component>
                    <Home />
                </Route>
            </Switch>
    <div className="App">
        <Header/>
    </div>
    </Router>
  );
}

export default App;
