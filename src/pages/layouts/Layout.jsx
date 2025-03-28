import React from 'react'
import Logotype from '../../partials/sections/Logotype'
import SideBar from '../../partials/sections/SideBar'
import Header from '../../partials/sections/Header'

const Layout = () => {
  return (
    <div className='wrapper'>
        <Logotype/>
        <SideBar/>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout