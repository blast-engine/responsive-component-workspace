import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import PicList from './PicList';
import { responsiveComponent } from './responsive-component_2';


class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className={`App ${this.props.sizeClass}`}> 
        <div className="App-header">
          <h2>My Robot Collection</h2>
        </div>
        <PicList />
      </div>
    );
  }
}

export default responsiveComponent(App);
