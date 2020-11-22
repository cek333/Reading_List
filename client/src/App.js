import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Search from './pages/Search';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Header />
        <Switch>
          <Route path="/search"><Search /></Route>
          <Route path="/saved"><Saved /></Route>
          <Route><NoMatch /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
