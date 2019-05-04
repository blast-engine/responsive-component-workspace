import React, { Component } from 'react';

import { responsiveComponent } from './responsive-component';
import { DesktopView } from './DesktopView';
import { MobileView } from './MobileView';

const App = responsiveComponent(
  class App extends Component {
    render(){
      const { isMobile } = this.props
      console.log('Is mobile? ', isMobile)
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
