import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//Screens
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';

//Components;
import Navbar from './components/header/navbar/Navbar';
import Backdrop from './components/header/backdrop/Backdrop';
import SideDrawer from './components/header/sideDrawer/SideDrawer';

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
