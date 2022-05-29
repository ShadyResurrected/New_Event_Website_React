import React from 'react'

import Sidebar from '../Stats/Sidebar/Sidebar'
import MainDash from '../Stats/MainDash/MainDash'
import RightSide from '../Stats/RightSide/RightSide'

import '../Stats/stats.css'


const Stats = () => {
    return (
        <div className="welcome-area">
        <div className="AppGlass">
          <Sidebar/>
          <MainDash/>
          <RightSide/>
        </div>
    </div>
    )
}

export default Stats