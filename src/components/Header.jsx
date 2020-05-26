import React from 'react'
import { Link } from 'gatsby'
import Svg from '../components/elements/Svg'

export default function Header({ onToggleMenu }) {
  return (
    <header id="header" className="alt bg-black">
      <Link to="/" className="logo">
        <span>We Build Black</span>
      </Link>
      <nav className="pr-4 sm:pr-6">
        <button type="button" className="menu-button" onClick={onToggleMenu}>
          <Svg icon='hamburger'/>
        </button>
      </nav>
    </header>
  )
}
