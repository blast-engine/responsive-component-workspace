import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import { responsiveComponent } from './responsive-component';
import { DesktopView } from './DesktopView';
import { MobileView } from './MobileView';
import './App.css';

const App = responsiveComponent(
  class App extends Component {
    render(){
      const { isMobile, sizeClass } = this.props;
      //console.log('Is mobile? ', isMobile);
      return (
        <div className={"App " + sizeClass}>
          {
            isMobile ? <MobileView /> : <DesktopView />
          }
          <div className="status">Is mobile: { isMobile + "" }</div>
          <div className="status">Current screen size: { sizeClass }</div>
        </div>
      );
    }
  }
);

export default App;
>>>>>>> e1cdbaefaae894a842aa1c056b12512b298dd97a
