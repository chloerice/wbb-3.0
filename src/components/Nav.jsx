import React from 'react'
import { Link } from 'gatsby'

export default function Nav({ onToggleMenu }) {
  return (
    <nav>
      <Link to="/" className="logo">
        <span>We Build Black</span>
      </Link>
      <button type="button" className="menu-button" onClick={onToggleMenu}>
        Menu
      </button>
    </nav>
  )
}
