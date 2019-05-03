import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Main from './pages/main';
import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';
import Sell from './pages/sell';

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/login" exact component={Login}/> 
        <Route path="/home" exact component={Home}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/sell" exact component={Sell}/>

    </Switch>
    </BrowserRouter>
);

export default  Routes;
