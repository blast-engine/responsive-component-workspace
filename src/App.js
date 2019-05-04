import React from 'react';
import logo from './logo.svg';
import './App.css';

import { responsiveComponent } from './responsive-component'
import { DesktopView } from './DesktopView'
import { MobileView } from './MobileView'


const App = responsiveComponent(
  class App extends React.Component {
    render(){
      const { isMobile } = this.props
      console.log('my prop ', isMobile)
      return (
        <div className="App">
          {
            isMobile ? <MobileView /> : <DesktopView />
          }
        </div>
      );
    }
  }
)

export default App
