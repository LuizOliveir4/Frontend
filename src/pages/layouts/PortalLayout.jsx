import React from 'react'
import SideBar from '../../partials/sections/SideBar'
import Header from '../../partials/sections/Header'
import { Outlet } from 'react-router-dom'

const PortalLayout = () => {
  return (
    <div className="wrapper-portal">
        <SideBar />
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default PortalLayout