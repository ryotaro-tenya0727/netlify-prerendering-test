import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Home, About } from './containers';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Helmet title='Default title' />
        <div className='App-header'>
          <h2>Welcome to React</h2>
        </div>

        <Router>
          <div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
            <hr />
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
                <Route path='about'>
                  <Route index element={<About />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
