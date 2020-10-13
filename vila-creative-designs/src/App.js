import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {Home} from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { File404 } from './File404';
import { Layout } from './components/Layout';

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/contact" component={ Contact } />
            <Route component={ File404 } />
          </Switch>
        </Router>
        </Layout>
    </React.Fragment>
  );
}

export default App;
