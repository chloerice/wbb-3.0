import React from 'react'
import { Link } from 'gatsby'

export default function Header({ onToggleMenu }) {
  return (
    <header id="header" className="alt">
      <Link to="/" className="logo">
        <strong>Forty</strong> <span>by HTML5 UP</span>
      </Link>
      <nav>
        <a className="menu-link" onClick={onToggleMenu} href="javascript:;">
          Menu
        </a>
      </nav>
    </header>
  )
}
