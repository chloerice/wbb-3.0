import React, { useCallback, useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import wbbWordmark from '../../assets/images/wbb-wordmark-white-no-bg.svg'
import styles from './Nav.module.scss'

export default function Nav() {
  const isMobile = window.matchMedia('(max-width: 767px)').matches
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => {
    setMenuOpen(menuOpen => !menuOpen)
  })
  console.log(isMobile)
  const menuClassName = classNames(styles.Menu, menuOpen && styles.open)
  const navButtonClassName = classNames(styles.NavButton, 'button')
  const closeButtonClassName = classNames(
    styles.NavButton,
    styles.CloseButton,
    'button'
  )

  const menuOpenTrigger =
    isMobile && !menuOpen ? (
      <button className={navButtonClassName} onClick={toggleMenu}>
        Menu
      </button>
    ) : null

  const menuCloseTrigger =
    isMobile && menuOpen ? (
      <button className={closeButtonClassName} onClick={toggleMenu}>
        <span className="fa fa-2x fa-close" />
      </button>
    ) : null

  const menuCollapseMarkup = (
    <div className={menuClassName}>
      <div className={styles.BrandWrapper}>
        <Link to="/" className={styles.BrandLink}>
          <img className={styles.Logo} src={wbbWordmark} alt="We Build Black" />
        </Link>
        {menuOpenTrigger}
        {menuCloseTrigger}
      </div>
      {menuOpen && (
        <ul className={styles.LinkWrapper}>
          <li className={styles.Link}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.Link}>
            <Link href="">Partner</Link>
          </li>
          <li className={styles.Link}>
            <Link href="/about">Volunteer</Link>
          </li>
          <button className={navButtonClassName}>Donate</button>
        </ul>
      )}
    </div>
  )

  const menuDesktopMarkup = (
    <div className={styles.MenuDesktop}>
      <Link to="/" className={styles.BrandLink}>
        <img className={styles.Logo} src={wbbWordmark} alt="We Build Black" />
      </Link>
      <ul className={styles.LinkWrapper}>
        <li className={styles.Link}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.Link}>
          <Link href="">Get involved</Link>
        </li>
        <li className={styles.Link}>
          <Link href="">Make an impact</Link>
        </li>
        <button className={navButtonClassName}>Donate</button>
      </ul>
    </div>
  )

  return (
    <nav className={styles.Nav}>
      {menuDesktopMarkup}
      {menuCollapseMarkup}
    </nav>
  )
}
