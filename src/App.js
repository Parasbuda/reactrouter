import React, { Component } from 'react'
import Home from './Component/Home'
import Contact from './Component/Contact'
import About from './Component/About'
import Navbar from './Component/NavBar'
import {BrowserRouter,Route} from "react-router-dom"


export default class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
       
      </div>
      </BrowserRouter>
    )
  }
}


