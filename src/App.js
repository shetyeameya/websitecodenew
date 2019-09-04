import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Footer from '../src/pages/Footer'
import Header from '../src/pages/header'
import Body from '../src/pages/Body'
import About from '../src/pages/About'
// import { Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import ScrollTop from '../src/hoc-helpers/ScrollTop';
// import Pokemongo from './PokemonGo/Pokemongo.js';
import WorkPlayWithHOC from './pages/workplay';
import MacroCalculatorWithHOC from './pages/MacroCalculator';
import Pokemongonew from '../src/PokemonGo/Pokemongonew';

class App extends Component {
  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <Layout>
      <ScrollTop>
        <Header/>
        <Route path="/" exact component={Body} />
        <Route path="/about" component={About} />
        <Route path="/workPlay" component={WorkPlayWithHOC} />
        <Route path="/pokemonlist" component={Pokemongonew} />
        <Route path="/macroCalculations" component={MacroCalculatorWithHOC} />

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
