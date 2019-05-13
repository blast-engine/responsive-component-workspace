import React from 'react'

import { responsiveComponent } from './responsive-component'
import { DesktopView } from './DesktopView'
import { MobileView } from './MobileView'

const App = responsiveComponent(
  function App(props) {

    const { isMobile, sizeClass } = props;

    return (
      <div className={`app ${sizeClass}`}>
        {
          isMobile ? <MobileView /> : <DesktopView />
        }
        <div className='status'>Is mobile: <b>{ isMobile.toString() }</b></div>
        <div className='status'>Current screen size: <b>{ sizeClass }</b></div>
      </div>
    )
  }
)

export default App;