import React, { Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import './App.css';
import Find from './pages/find/Find';
import Horde from './pages/horde/Horde';
import Study from './pages/study/Study';
import Lecture from './pages/lecture/lessons/Lessons';
import HomePage from './pages/homepage/HomePage';
import Foot from './components/foot/Foot';


function App() {
  return (
    <Fragment>
<<<<<<< HEAD
      <BrowserRouter> 
=======
      <BrowserRouter>
>>>>>>> 03b40db0c1a5f978e8d1d3a24ad3a13f473269d0
        <Route path="/" exact component={Find} />
        <Route path="/horde" component={Horde} />
        <Route path="/study" component={Study} />
        <Route path="/lecture" component={Lecture} />
        <Route path="/my" component={HomePage} />
        <Redirect to="/"/>
        <Foot />
        </BrowserRouter> 
    </Fragment>

  );
}

export default App;
