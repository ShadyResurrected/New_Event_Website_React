import React from 'react'
import Card from '../Cards/Cards'

import '../MainDash/mainDash.css'
import Table from '../Table/Table'

const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Card/>
        <Table/>
    </div>
  )
}

export default MainDash