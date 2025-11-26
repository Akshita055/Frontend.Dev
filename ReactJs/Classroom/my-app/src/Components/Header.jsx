import React from 'react'
import './header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">Ram kumar</div>
        <nav className="navbar" aria-label="Main navigation">
          <ul className="nav-list">
            <li><a href="#portfolio">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
