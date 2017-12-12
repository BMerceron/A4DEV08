import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Layout from './Layout'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'

export default class App extends Component {
  render(){
    return(
        <BrowserRouter>
            <Layout>
                <Route exact path='/' component={Screen1} ></Route>
                <Route path='/2' component={Screen2} ></Route>
                <Route path='/3' component={Screen3} ></Route>
            </Layout>
        </BrowserRouter>
    );
  }
}
