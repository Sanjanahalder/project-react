import React, { Component } from 'react'
import Navbar  from './components/Navbar'
import News from './components/News';

export default class App extends Component {
  // a = "sanjana";
   render() {
    return (
      <div>
        {/* Hello newsapp {this.a} */}
        <Navbar/>
        <News/>
       
      </div>
    )
  }
}


