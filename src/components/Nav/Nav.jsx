import React, { useCallback, useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import wbbWordmark from '../../assets/images/wbb-wordmark-white-no-bg.svg'
import styles from './Nav.module.scss'

export default function Nav() {
  const isMobile = window.matchMedia('(max-width: 767px)').matches
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(mobileMenuOpen => !mobileMenuOpen)
  })

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState('')
  const toggleDropdownMenu = useCallback(name => event => {
    event.preventDefault()
    setActiveDropdown(activeDropdown => (activeDropdown === name ? '' : name))
    setDropdownOpen(dropdownOpen => !dropdownOpen)
  })

  const getInvolvedClassName = classNames(
    styles.DropdownItem,
    activeDropdown === 'Get involved' && dropdownOpen && 'open'
  )

  const makeAnImpactClassName = classNames(
    styles.DropdownItem,
    activeDropdown === 'Make an impact' && dropdownOpen && 'open'
  )

  const menuClassName = classNames(
    styles.Menu,
    isMobile && styles.MenuMobile,
    isMobile && mobileMenuOpen && styles.open
  )
  const navButtonClassName = classNames(styles.NavButton, 'button')
  const closeButtonClassName = classNames(
    styles.NavButton,
    styles.CloseButton,
    'button'
  )

  const menuOpenTrigger =
    isMobile && !mobileMenuOpen ? (
      <button className={navButtonClassName} onClick={toggleMobileMenu}>
        Menu
      </button>
    ) : null

  const menuCloseTrigger =
    isMobile && mobileMenuOpen ? (
      <button className={closeButtonClassName} onClick={toggleMobileMenu}>
        <span className="fa fa-2x fa-close" />
      </button>
    ) : null

  const menuMarkup = (
    <ul className={menuClassName}>
      <li className={styles.MenuItem}>
        <Link className={styles.MenuLink} href="/about">
          About
        </Link>
      </li>
      <li className={getInvolvedClassName}>
        <a
          className={styles.DropdownLink}
          aria-haspopup="true"
          aria-expanded={activeDropdown === 'Get involved' && dropdownOpen}
          onHover={toggleDropdownMenu('Get involved')}
          onClick={toggleDropdownMenu('Get involved')}
        >
          Get involved
        </a>
        {activeDropdown === 'Get involved' && dropdownOpen && (
          <ul className={styles.DropdownMenu}>
            <li className={styles.DropdownMenuItem}>
              <Link className={styles.DropdownMenuLink} href="/events">
                Events
              </Link>
            </li>
            <li className={styles.DropdownMenuItem}>
              <Link className={styles.DropdownMenuLink} href="/programs">
                Programs
              </Link>
            </li>
            <li className={styles.DropdownMenuItem}>
              <Link className={styles.DropdownMenuLink} href="/slack">
                Slack
              </Link>
            </li>
          </ul>
        )}
      </li>
      <li className={makeAnImpactClassName}>
        <a
          className={styles.DropdownLink}
          aria-expanded={activeDropdown === 'Make an impact'}
          onHover={toggleDropdownMenu('Make an impact')}
          onClick={toggleDropdownMenu('Make an impact')}
        >
          Make an impact
        </a>
        {activeDropdown === 'Make an impact' && dropdownOpen && (
          <ul className={styles.DropdownMenu}>
            <li className={styles.DropdownMenuItem}>
              <Link className={styles.DropdownMenuLink} href="/hire">
                Hire
              </Link>
            </li>
            <li className={styles.DropdownMenuItem}>
              <Link className={styles.DropdownMenuLink} href="/partner">
                Partner
              </Link>
            </li>
            <li className={styles.DropdownMenuItem}>
              <Link className={styles.DropdownMenuLink} href="/volunteer">
                Volunteer
              </Link>
            </li>
          </ul>
        )}
      </li>
      <button className={navButtonClassName}>Donate</button>
    </ul>
  )

  const navMarkup = (
    <div className={styles.MenuDesktop}>
      <Link to="/" className={styles.BrandLink}>
        <img className={styles.Logo} src={wbbWordmark} alt="We Build Black" />
      </Link>
      {menuOpenTrigger}
      {menuCloseTrigger}
      {menuMarkup}
    </div>
  )

  return <nav className={styles.Nav}>{navMarkup}</nav>
}
