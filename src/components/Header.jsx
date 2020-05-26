import React from 'react'
import { Link } from 'gatsby'

export default function Header({ onToggleMenu }) {
  return (
    <header id="header" className="alt">
      <Link to="/" className="logo text-black">
        <span>We Build Black</span>
      </Link>
      <nav>
        <button type="button" className="menu-button text-black" onClick={onToggleMenu}>
          Menu
        </button>
      </nav>
    </header>
  )
}
