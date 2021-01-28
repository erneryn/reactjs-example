import React from 'react';
import Home from './components/HomeComp'
import NavbarComp from './components/NavbarCom'
import DetailComp from './components/DetailComp'
import FavoritesComp from './components/FavoritesComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import './styles/custom.css'
import store from './store/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


function App() {

  return (
    <Provider store={store}>
    <Router>
      <NavbarComp />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <DetailComp />
        </Route>
        <Route path="/my-favorites">
          <FavoritesComp />
        </Route>
      </Switch>
    </Router>
    </Provider>
  )
}

export default App;
