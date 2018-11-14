import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingView from './LandingView';
import Postform from './Postform';
import Posts from './Posts';


import store from '../store';

export default class MainNav extends Component {
  render() {
    return (
      <div style={{height: 600}}>
      <Provider store={store}>
            <BrowserRouter>     
            <Switch>
                <Route exact path='/' component={LandingView}/>
                <Route path='/postform' component={Postform}/>
                <Route path='/posts' component={Posts}/>
            </Switch>
            </BrowserRouter>
      </Provider>
      </div>
    )
  }
}

 
