import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navigation'>
      <Link to={'/'}>  <li className='nav-list-item ashllxyy'> <div className='blinkingCircle'></div>  ASH <br/> -LLXYY <br/> <span className='dev'>dev</span></li></Link>
      <Link to={'/about'}>   <li className='nav-list-item about-me' style={{textAlign: 'right'}}> <div className='blinkingCircle' ></div> ABOUT <br/> ME <br/> <span className='dev' style={{position: 'relative', left: '-5px'}}>passion</span></li></Link>
      <Link to={'/service'}>   <li className='nav-list-item services'> <div className='blinkingCircle'></div> SERVICE <br/>-S  <br/> <span className='dev' style={{position: 'relative', left: '-30px', top: '-5px'}}>etho</span></li></Link>
      <Link to={'/connect'}>  <li className='nav-list-item contact'> <div className='blinkingCircle'></div>  CONNECT <br/> <span className='dev' style={{position: 'relative', right: '-15px'}}>network</span></li></Link>
    </nav>  
  )
}
