import React from "react";  
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes/index.js";
import {Provider} from 'react-redux';
import store from './store/store';  

function App() {
    return (
      <Provider store={store}>
        <HashRouter>
          {renderRoutes(routes)}
        </HashRouter>
      </Provider>
    );
  }
  
  export default App;