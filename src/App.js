import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './elements/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./elements/Login";
import Header from "./elements/Menu";
import Contacto from "./elements/Contacto";
import Servicios from "./elements/Servicios";

function App() {
  return (
      <HashRouter>
        <div className="App">

            <Switch>
                <Route path="/" exact to="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/servicios" component={Servicios} />
                <Route path="/contacto" component={Contacto} />


          </Switch>
        </div>
      </HashRouter>
  );
}

export default App;
