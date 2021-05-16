import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/order/:name'>
            <Order/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
