import React, { Component } from 'react';
import { Router , Route, IndexRoute, browserHistory } from 'react-router';


import Layout from './Layout'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'

export default class App extends Component {
  render(){
    return(
        <Router history={browserHistory} >
            <Route path='/' component={Layout} >
                <IndexRoute component={Screen1} ></IndexRoute>
                <Route path='/2' component={Screen2} ></Route>
                <Route path='/3' component={Screen3} ></Route>
            </Route>
        </Router>
    );
  }
}
