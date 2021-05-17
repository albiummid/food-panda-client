import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import { createContext, useState } from 'react';
export const UserContext = createContext();
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <UserContext.Provider value={[cartItems,setCartItems]} >
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
    </UserContext.Provider>
  );
}

export default App;
