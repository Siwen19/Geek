import React from 'react';
import { BrowserRouter as Router, Route, Redirect }from 'react-router-dom'
import './App.css';
import Find from './pages/find/Find';
import Horde from './pages/horde/Horde';

function App() {
  return (
    <Router>
      <Route path="/find" exact component={Find} />
      <Route path="/horde" component={Horde} />
      {/* <Redirect to="/find"/> */}
    </Router>
  );
}

export default App;
