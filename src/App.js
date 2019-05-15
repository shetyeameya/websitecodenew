import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from '../src/pages/Footer'
import Header from '../src/pages/header'
import Body from '../src/pages/Body'
import About from '../src/pages/About'
// import { Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import ScrollTop from '../src/hoc-helpers/ScrollTop';
import { BrowserRouter,  Link } from "react-router-dom";
import Pokemongo from './PokemonGo/Pokemongo.js';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Layout>
      <ScrollTop>
        <Header/>
        <Route path="/" exact component={Body} />
        <Route path="/about" component={About} />
        <Route path="/workPlay" component={Pokemongo} />
        <div>
        <Footer />
        </div>
      </ScrollTop>
      </Layout>
      </BrowserRouter>
      
    );
  }
}

export default App;
