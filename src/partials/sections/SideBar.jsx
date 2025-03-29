import React from 'react'
import LogotypeLink from '../components/LogotypeLink'
import NavLinks from './NavLinks'

const SideBar = () => {
  return (
    <section className="sidebar">
      <LogotypeLink />
      <NavLinks />
    </section>
  )
}

export default SideBar