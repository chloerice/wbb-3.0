import React, { useCallback, useState, useRef } from 'react'
import { Link, navigate } from 'gatsby'
import classNames from 'classnames'

import wbbWordmark from '../../assets/images/wbb-wordmark-white-no-bg.svg'

import styles from './Nav.module.scss'

export default function Nav() {
  const aboutRef = useRef(null)
  const getInvolvedRef = useRef(null)
  const makeAnImpactRef = useRef(null)
  const donateRef = useRef(null)
  const eventsRef = useRef(null)
  const programsRef = useRef(null)
  const slackRef = useRef(null)
  const hireRef = useRef(null)
  const partnerRef = useRef(null)
  const volunteerRef = useRef(null)
  const navItemRefs = [aboutRef, getInvolvedRef, makeAnImpactRef, donateRef]
  const getInvolvedRefs = [eventsRef, programsRef, slackRef]
  const makeAnImpactRefs = [hireRef, partnerRef, volunteerRef]
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

  const closeDropdown = useCallback(() => {
    setActiveDropdown('')
    setDropdownOpen(false)
  })
  const openDropdown = useCallback(name => {
    setActiveDropdown(name)
    setDropdownOpen(true)
  })

  const handleFocus = useCallback(name => () => {
    if (!dropdownOpen) return
    openDropdown(name)
  })

  const getInvolvedClassName = classNames(
    styles.DropdownItem,
    activeDropdown === 'Get involved' && dropdownOpen && styles.active
  )

  const makeAnImpactClassName = classNames(
    styles.DropdownItem,
    activeDropdown === 'Make an impact' && dropdownOpen && styles.active
  )

  const menuClassName = classNames(styles.Menu, mobileMenuOpen && styles.open)
  const mobileMenuButtonClassName = classNames(
    styles.MobileMenuToggle,
    styles.NavButton,
    'button'
  )
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

  const isDropdown = useCallback(name => {
    return name === 'Get involved' || name === 'Make an impact'
  })

  const focusNextSubMenuItem = useCallback(
    (name, direction, currentItemIndex) => {
      let nextItemIndex
      const refList =
        name === 'Get involved' ? getInvolvedRefs : makeAnImpactRefs

      if (direction === 'up') {
        nextItemIndex = currentItemIndex === 0 ? 2 : currentItemIndex - 1
      } else if (direction === 'down') {
        nextItemIndex = currentItemIndex === 2 ? 0 : currentItemIndex + 1
      }

      refList[nextItemIndex].current.focus()

      console.log(
        'Focusing sub-menuitem',
        currentItemIndex,
        nextItemIndex,
        refList[nextItemIndex].current
      )
    }
  )

  const focusNextMenuItem = useCallback((direction, currentItemIndex) => {
    let nextItemIndex

    if (direction === 'left') {
      nextItemIndex =
        currentItemIndex === 0 ? navItemRefs.length - 1 : currentItemIndex - 1
    } else if (direction === 'right') {
      nextItemIndex =
        currentItemIndex === navItemRefs.length - 1 ? 0 : currentItemIndex + 1
    }

    const nextItem = navItemRefs[nextItemIndex]

    if (nextItem.current) {
      if (dropdownOpen && !isDropdown(nextItem.current.innerHTML)) {
        closeDropdown()
      }

      nextItem.current.focus()
    }
  })

  const handleKeyPress = useCallback((name, index, isSubMenuItem) => event => {
    switch (event.key) {
      case 'Enter':
      case 'Space':
        if (event.target['data-href']) {
          event.preventDefault()
          return handleNavigate(event.target['data-href'])
        }

        if (isDropdown(name)) {
          toggleDropdownMenu(name)
          return focusNextSubMenuItem(name, 'down', 2)
        }
      case 'Escape':
        return closeDropdown()
      case 'ArrowLeft':
        event.preventDefault()
        return focusNextMenuItem('left', index)
      case 'ArrowRight':
        event.preventDefault()
        return focusNextMenuItem('right', index)
      case 'ArrowDown':
        event.preventDefault()
        if (!dropdownOpen && isDropdown(name) && !isSubMenuItem) {
          openDropdown(name)
          console.log('arrow down to open')
          return focusNextSubMenuItem(name, 'down', 2)
        }

        if (isSubMenuItem) {
          console.log('arrow down sub menu item')
          return focusNextSubMenuItem(name, 'down', index)
        }

      case 'ArrowUp':
        event.preventDefault()
        if (!dropdownOpen && isDropdown(name) && !isSubMenuItem) {
          openDropdown(name)
          console.log('arrow up to open')
          return focusNextSubMenuItem(name, 'up', 0)
        }

        if (isSubMenuItem) {
          console.log('arrow up sub menu item')
          return focusNextSubMenuItem(name, 'up', index)
        }
    }
  })

  const handleNavigate = useCallback(url => () => {
    navigate(url)
  })

  const menuOpenTrigger = !mobileMenuOpen ? (
    <button className={mobileMenuButtonClassName} onClick={toggleMobileMenu}>
      Menu
    </button>
  ) : null

  const menuCloseTrigger = mobileMenuOpen ? (
    <button className={closeButtonClassName} onClick={toggleMobileMenu}>
      <span className="fa fa-2x fa-close" />
    </button>
  ) : null

  const menuMarkup = (
    <ul className={menuClassName} role="menubar" aria-label="Site navigation">
      <li role="none" className={styles.MenuItem}>
        <button
          type="button"
          className={styles.MenuLink}
          data-navItem="About"
          role="menuitem"
          tabIndex={0}
          onClick={handleNavigate('/about')}
          onKeyDown={handleKeyPress('About', 0, false)}
          ref={aboutRef}
          data-href="/about"
        >
          About
        </button>
      </li>
      <li role="none" className={getInvolvedClassName}>
        <button
          role="menuitem"
          type="button"
          tabIndex={-1}
          data-navItem="Get involved"
          className={styles.DropdownButton}
          aria-controls="get-involved-dropdown"
          aria-expanded={activeDropdown === 'Get involved' && dropdownOpen}
          onClick={toggleDropdownMenu('Get involved')}
          onKeyDown={handleKeyPress('Get involved', 1, false)}
          onFocus={handleFocus('Get involved')}
          ref={getInvolvedRef}
        >
          Get involved
        </button>
        <ul
          className={styles.DropdownMenu}
          id="get-involved-dropdown"
          role="menu"
        >
          <li role="none" className={styles.DropdownMenuItem}>
            <button
              type="button"
              role="menuitem"
              className={styles.DropdownMenuButton}
              data-navItem="Get involved"
              data-menuItem="Events"
              tabIndex={-1}
              ref={eventsRef}
              data-href="/get-involved/events"
              onKeyDown={handleKeyPress('Get involved', 0, true)}
            >
              Events
            </button>
          </li>
          <li role="none" className={styles.DropdownMenuItem}>
            <button
              type="button"
              role="menuitem"
              className={styles.DropdownMenuButton}
              onClick={handleNavigate('/get-involved/programs')}
              data-navItem="Get involved"
              data-menuItem="Programs"
              tabIndex={-1}
              ref={programsRef}
              data-href="/programs"
              onKeyDown={handleKeyPress('Get involved', 1, true)}
            >
              Programs
            </button>
          </li>
          <li role="none" className={styles.DropdownMenuItem}>
            <button
              type="button"
              role="menuitem"
              className={styles.DropdownMenuButton}
              data-navItem="Get involved"
              data-menuItem="Slack"
              ref={slackRef}
              data-href="/slack"
              onKeyDown={handleKeyPress('Get involved', 2, true)}
              tabIndex={-1}
            >
              Slack
            </button>
          </li>
        </ul>
      </li>
      <li role="none" className={makeAnImpactClassName}>
        <button
          type="button"
          role="menuitem"
          data-navItem="Make an impact"
          className={styles.DropdownButton}
          aria-controls="make-an-impact-dropdown"
          aria-expanded={activeDropdown === 'Make an impact' && dropdownOpen}
          onClick={toggleDropdownMenu('Make an impact')}
          onKeyDown={handleKeyPress('Make an impact', 2, false)}
          onFocus={handleFocus('Make an impact')}
          ref={makeAnImpactRef}
          tabIndex={-1}
        >
          Make an impact
        </button>

        <ul
          className={styles.DropdownMenu}
          id="make-an-impact-dropdown"
          role="menu"
        >
          <li role="none" className={styles.DropdownMenuItem}>
            <button
              type="button"
              className={styles.DropdownMenuButton}
              tabIndex={-1}
              role="menuitem"
              ref={hireRef}
              data-href="/hire"
              data-navItem="Make an impact"
              onClick={handleNavigate('/make-an-impact/hire')}
              onKeyDown={handleKeyPress('Make an impact', 0, true)}
            >
              Hire
            </button>
          </li>
          <li
            role="none"
            className={styles.DropdownMenuItem}
            data-navItem="Make an impact"
          >
            <button
              type="button"
              className={styles.DropdownMenuButton}
              tabIndex={-1}
              role="menuitem"
              ref={partnerRef}
              data-href="/partner"
              onClick={handleNavigate('/make-an-impact/partner')}
              onKeyDown={handleKeyPress('Make an impact', 1, true)}
            >
              Partner
            </button>
          </li>
          <li
            role="none"
            className={styles.DropdownMenuItem}
            data-navItem="Make an impact"
          >
            <button
              type="button"
              className={styles.DropdownMenuButton}
              tabIndex={-1}
              role="menuitem"
              ref={volunteerRef}
              data-href="/volunteer"
              onClick={handleNavigate('/make-an-impact/volunteer')}
              onKeyDown={handleKeyPress('Make an impact', 2, true)}
            >
              Volunteer
            </button>
          </li>
        </ul>
      </li>
      <li className={styles.MenuItem} role="none">
        <form
          className={styles.DonateForm}
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_blank"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="RZWPA5VWQSV3U" />
          <button
            type="submit"
            className={donateButtonClassName}
            data-navItem="Donate"
            onKeyDown={handleKeyPress('Donate', 3, false)}
            ref={donateRef}
            data-href="/donate"
            tabIndex={-1}
            role="menuitem"
          >
            Donate
          </button>
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </li>
    </ul>
  )

  return (
    <nav className={styles.Nav} aria-label="We Build Black">
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
