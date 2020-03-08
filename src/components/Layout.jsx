import React, { useCallback, useState } from 'react'
import classname from 'classnames'

import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

import '../assets/scss/main.scss'

export default function Layout({ children }) {
  const [menuVisible, setMenuVisible] = useState(false)
  const toggleMenu = useCallback(() => {
    setMenuVisible(menuVisible => !menuVisible)
  })

  const className = classname('body', menuVisible && 'is-menu-visible')

  return (
    <div className={className}>
      <div id="wrapper">
        <Header onToggleMenu={toggleMenu} />
        {children}
        <Contact />
        <Footer />
      </div>
      <Menu onToggleMenu={toggleMenu} />
    </div>
  )
}
