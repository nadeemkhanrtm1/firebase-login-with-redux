import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Start from "./component/Start"
import Register from "./component/Register"
import Login from "./component/Login"
import Home from "./component/Home"
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Start/>
        </Route>
        <Route path='/register'>
            <Register/>
        </Route>
        <Route path='/login'>
            <Login/>
        </Route>
        <Route path='/home'>
            <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
