import React from 'react';
import {NavLink} from "react-router-dom"

function Navigation() {
  return (
  <nav id='Navigation' >
    <NavLink to="/" className='Nav'>Home</NavLink>
    <NavLink to="/priority" className='Nav'>Priority</NavLink>
    <NavLink to="/completed" className='Nav'>Completed</NavLink>
  </nav>
  )
}



export default Navigation;