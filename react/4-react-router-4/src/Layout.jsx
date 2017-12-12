import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Layout extends Component {
  render(){
    return(
        <div>
            <header></header>
            <nav>
                <Link to='/' >1</Link>
                <Link to='/2' >2</Link>
                <Link to='/3' >3</Link>
            </nav>
            <main>
                {this.props.children}
            </main>
        </div>
    );
  }
}
