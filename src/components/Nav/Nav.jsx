import React, { useCallback, useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import wbbWordmark from '../../assets/images/wbb-wordmark-white-no-bg.svg'
import styles from './Nav.module.scss'

export default function Nav() {
  const brandLinkRef = useRef(null)
  const aboutLinkRef = useRef(null)
  const getInvolvedRef = useRef(null)
  const makeAnImpactRef = useRef(null)
  const donateRef = useRef(null)
  const navItemRefs = [
    brandLinkRef,
    aboutLinkRef,
    getInvolvedRef,
    makeAnImpactRef,
    donateRef,
  ]

  const focusNextItem = useCallback((direction, currentItem) => {
    navItemRefs.filter(ref => {
      if (ref.current) ref.current['data-navItem']
    })
  })

  const isMobile = window.matchMedia('(max-width: 767px)').matches
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(mobileMenuOpen => !mobileMenuOpen)
  })

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState('')
  const toggleDropdownMenu = useCallback(
    name => event => {
      event.preventDefault()
      const nextActiveDropdown = activeDropdown === name ? '' : name
      setActiveDropdown(nextActiveDropdown)

      return !nextActiveDropdown
        ? setDropdownOpen(false)
        : setDropdownOpen(true)
    },
    [activeDropdown]
  )
  console.log(document.activeElement.getAttribute('nextSibling'))
  const isChildActive = useCallback(name => {
    return (
      document.activeElement.getAttribute('data-navItem') &&
      document.activeElement.getAttribute('data-navItem') === name
    )
  })

  const handleBlur = useCallback(name => event => {
    if (isChildActive(name)) return
    setActiveDropdown('')
    setDropdownOpen(false)
  })

  const getInvolvedClassName = classNames(
    styles.DropdownItem,
    activeDropdown === 'Get involved' && dropdownOpen && styles.active
  )

  const makeAnImpactClassName = classNames(
    styles.DropdownItem,
    activeDropdown === 'Make an impact' && dropdownOpen && styles.active
  )

  const menuClassName = classNames(
    styles.Menu,
    isMobile && styles.MenuMobile,
    isMobile && mobileMenuOpen && styles.open
  )
  const navButtonClassName = classNames(styles.NavButton, 'button')
  const donateButtonClassName = classNames(
    styles.NavButton,
    styles.DonateButton,
    'button'
  )
  const closeButtonClassName = classNames(
    styles.NavButton,
    styles.CloseButton,
    'button'
  )

  const handleKeyPress = useCallback(name => event => {
    console.log(event.target, event.key)
    switch (event.key) {
      case 'Enter':
      case 'Space':
      case 'Escape':
        return toggleDropdownMenu(name)
      case 'Tab':
        return isChildActive ? null : toggleDropdownMenu(name)
      case 'ArrowLeft':
        return focusNextItem('left')
      case 'ArrowRight':
        return focusNextItem('right')
    }
  })

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
        <Link className={styles.MenuLink} href="/about" data-navItem="About">
          About
        </Link>
      </li>
      <li
        className={getInvolvedClassName}
        onKeyPress={handleKeyPress('Get involved')}
      >
        <button
          data-navItem="Get involved"
          className={styles.DropdownButton}
          aria-controls="get-involved-dropdown"
          aria-expanded={activeDropdown === 'Get involved' && dropdownOpen}
          onClick={toggleDropdownMenu('Get involved')}
        >
          Get involved
        </button>
        <ul className={styles.DropdownMenu} id="get-involved-dropdown">
          <li className={styles.DropdownMenuItem}>
            <Link
              className={styles.DropdownMenuLink}
              href="/events"
              data-navItem="Get involved"
            >
              Events
            </Link>
          </li>
          <li className={styles.DropdownMenuItem}>
            <Link
              className={styles.DropdownMenuLink}
              href="/programs"
              data-navItem="Get involved"
            >
              Programs
            </Link>
          </li>
          <li className={styles.DropdownMenuItem}>
            <Link
              className={styles.DropdownMenuLink}
              href="/slack"
              data-navItem="Get involved"
            >
              Slack
            </Link>
          </li>
        </ul>
      </li>
      <li
        className={makeAnImpactClassName}
        onKeyPress={handleKeyPress('Make an impact')}
      >
        <button
          data-navItem="Make an impact"
          className={styles.DropdownButton}
          aria-controls="make-an-impact-dropdown"
          aria-expanded={activeDropdown === 'Make an impact' && dropdownOpen}
          onClick={toggleDropdownMenu('Make an impact')}
        >
          Make an impact
        </button>

        <ul className={styles.DropdownMenu} id="make-an-impact-dropdown">
          <li className={styles.DropdownMenuItem} data-navItem="Make an impact">
            <Link className={styles.DropdownMenuLink} href="/hire">
              Hire
            </Link>
          </li>
          <li className={styles.DropdownMenuItem} data-navItem="Make an impact">
            <Link className={styles.DropdownMenuLink} href="/partner">
              Partner
            </Link>
          </li>
          <li className={styles.DropdownMenuItem} data-navItem="Make an impact">
            <Link className={styles.DropdownMenuLink} href="/volunteer">
              Volunteer
            </Link>
          </li>
        </ul>
      </li>
      <li className={styles.MenuItem}>
        <button className={donateButtonClassName} data-navItem="Donate">
          Donate
        </button>
      </li>
    </ul>
  )

  return (
    <nav className={styles.Nav}>
      <div className={styles.BrandWrapper}>
        <Link to="/" className={styles.BrandLink} data-navItem="Home">
          <img className={styles.Logo} src={wbbWordmark} alt="We Build Black" />
        </Link>
        {menuOpenTrigger}
        {menuCloseTrigger}
      </div>
      {menuMarkup}
    </nav>
  )
}
