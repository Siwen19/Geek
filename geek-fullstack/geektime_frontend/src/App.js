import React, { Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import './App.css';
import Find from './pages/find/Find';
import Horde from './pages/horde/Horde';
import Study from './pages/study/Study';
import Lecture from './pages/lecture/lessons/index';
import HomePage from './pages/homepage/HomePage';
import Foot from './components/foot/Foot';   
import {Provider} from 'react-redux';
import {store} from './store/store';


function App() {
  return (
      <Provider store={store}> 
    <Fragment>  
      <BrowserRouter>
        <Route path="/" exact component={Find} />
        <Route path="/horde" component={Horde} />
        <Route path="/study" component={Study} />
        <Route path="/lecture" component={Lecture} />
        <Route path="/my" component={HomePage} />
        <Redirect to="/"/>
        <Foot />
        </BrowserRouter> 
    </Fragment> 
        </Provider> 
  );
}

export default App;
