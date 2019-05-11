import React, { Component } from 'react';
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