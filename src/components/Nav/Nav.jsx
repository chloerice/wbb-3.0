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
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState(null)
  const [activeSubMenuItemIndex, setActiveSubMenuItemIndex] = useState(null)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(mobileMenuOpen => !mobileMenuOpen)
  })

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState('')

  const closeDropdown = useCallback(() => {
    console.log('closing dropdown')

    setActiveDropdown('')
    setActiveSubMenuItemIndex(null)
    setDropdownOpen(false)
  })
  const openDropdown = useCallback(name => {
    setActiveDropdown(name)
    setDropdownOpen(true)
  })

  const toggleDropdownMenu = useCallback(
    name => {
      if (activeDropdown === name) {
        return closeDropdown()
      }
      if (activeDropdown !== name) {
        return openDropdown(name)
      }
    },
    [dropdownOpen, activeDropdown]
  )

  const handleFocusMenuItem = useCallback(
    event => {
      const index = event.target.getAttribute('data-index')
      setActiveMenuItemIndex(Number(index))
    },
    [setActiveMenuItemIndex, activeMenuItemIndex]
  )

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

  const isDropdown = useCallback(
    name => name === 'Get involved' || name === 'Make an impact',
    []
  )

  const getIndexToFocus = useCallback(
    direction => (direction === 'up' ? 2 : 0),
    []
  )

  const handleFocusSubNavItem = useCallback(event => {
    const index = event.target.getAttribute('data-index')
    setActiveSubMenuItemIndex(Number(index))
  })

  const focusFirstSubNavItem = useCallback(name => {
    const refList = name === 'Get involved' ? getInvolvedRefs : makeAnImpactRefs
    const menuItem = refList[0]
    if (menuItem && menuItem.current) menuItem.current.focus()
    setActiveSubMenuItemIndex(0)
  })

  const focusLastSubNavItem = useCallback(name => {
    const refList = name === 'Get involved' ? getInvolvedRefs : makeAnImpactRefs
    const menuItem = refList[2]
    if (menuItem && menuItem.current) {
      console.log('FOCUSING SUBNAV ITEM', menuItem.current)
      menuItem.current.focus()
      setActiveSubMenuItemIndex(2)
    }
  })

  const handleMouseOver = useCallback(event => {
    const name = event.target.getAttribute('data-navItem')
    openDropdown(name)
  })

  const handleMouseLeave = useCallback(() => {
    closeDropdown()
  })

  const focusNextSubMenuItem = useCallback(
    (name, direction) => {
      const refList =
        name === 'Get involved' ? getInvolvedRefs : makeAnImpactRefs

      let nextItemIndex = activeSubMenuItemIndex

      if (nextItemIndex === null) {
        nextItemIndex = getIndexToFocus(direction)
      } else if (direction === 'up') {
        nextItemIndex =
          activeSubMenuItemIndex === 0 ? 2 : activeSubMenuItemIndex - 1
      } else if (direction === 'down') {
        nextItemIndex =
          activeSubMenuItemIndex === 2 ? 0 : activeSubMenuItemIndex + 1
      }

      const nextItem = refList[nextItemIndex]

      if (nextItem && nextItem.current) {
        console.log(
          'Focusing sub-menuitem',
          activeSubMenuItemIndex,
          nextItemIndex,
          nextItem.current
        )
        nextItem.current.focus()
        setActiveSubMenuItemIndex(nextItemIndex)
      }
    },
    [activeSubMenuItemIndex, dropdownOpen]
  )

  const handleDropdownKeyPress = useCallback(
    event => {
      const navItem = event.target.getAttribute('data-navItem')
      const isSubMenuItem = event.target.getAttribute('data-menuItem') !== null

      switch (event.key) {
        case 'Enter':
        case 'Space':
          event.preventDefault()
          event.stopPropagation()
          console.log('in dropdown div')
          return toggleDropdownMenu(navItem)

        case 'ArrowDown':
          event.stopPropagation()
          event.preventDefault()
          if (!dropdownOpen && isDropdown(navItem) && !isSubMenuItem) {
            console.log('arrow down to open')
            openDropdown(navItem)
            return focusFirstSubNavItem(navItem)
          }

          if (isSubMenuItem) {
            console.log('arrow down sub menu item')
            return focusNextSubMenuItem(navItem, 'down')
          }

          break

        case 'ArrowUp':
          event.stopPropagation()
          event.preventDefault()
          if (!dropdownOpen && isDropdown(navItem) && !isSubMenuItem) {
            console.log('arrow up to open')
            openDropdown(navItem)
            return focusLastSubNavItem(navItem)
          }

          if (isSubMenuItem) {
            console.log('arrow up sub menu item')
            return focusNextSubMenuItem(navItem, 'up')
          }

          break

        default:
          break
      }
    },
    [dropdownOpen]
  )

  const focusNextMenuItem = useCallback(
    direction => {
      let nextItemIndex = activeMenuItemIndex

      if (direction === 'left') {
        nextItemIndex =
          activeMenuItemIndex === 0
            ? navItemRefs.length - 1
            : activeMenuItemIndex - 1
      } else if (direction === 'right') {
        nextItemIndex =
          activeMenuItemIndex === navItemRefs.length - 1
            ? 0
            : activeMenuItemIndex + 1
      }

      const nextItem = navItemRefs[nextItemIndex]
      const name = nextItem.current.getAttribute('data-navItem')

      if (nextItem.current) {
        nextItem.current.focus()
        setActiveMenuItemIndex(nextItemIndex)

        if (
          dropdownOpen &&
          !isDropdown(nextItem.current.getAttribute('data-navItem'))
        ) {
          closeDropdown()
        } else if (dropdownOpen && isDropdown(name)) {
          toggleDropdownMenu(name)
        }
      }
    },
    [activeMenuItemIndex, dropdownOpen]
  )

  const handleMenuKeyPress = useCallback(event => {
    const navItem = event.target.getAttribute('data-navItem')

    switch (event.key) {
      case 'Tab':
        // Because only the first nav item, 'About' in this case, has a tabindex, we know if we didn't tab to 'About' we've tabbed outside of the menu and should close any open dropdown.
        if (navItem !== 'About') return closeDropdown()
        return

      case 'Escape':
        return closeDropdown()

      case 'ArrowLeft':
        event.preventDefault()
        return focusNextMenuItem('left')

      case 'ArrowRight':
        event.preventDefault()
        return focusNextMenuItem('right')

      default:
        break
    }
  })

  const handleNavigate = useCallback(event => {
    const url = event.target.getAttribute('data-href')
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
          data-index={0}
          data-href="/about"
          role="menuitem"
          tabIndex={0}
          onClick={handleNavigate}
          onTouchStart={handleNavigate}
          onFocus={handleFocusMenuItem}
          ref={aboutRef}
        >
          About
        </button>
      </li>
      <li role="none" className={getInvolvedClassName}>
        <div
          className={styles.DropdownWrapper}
          onKeyUp={handleDropdownKeyPress}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <button
            role="menuitem"
            type="button"
            tabIndex={-1}
            data-navItem="Get involved"
            data-index={1}
            className={styles.DropdownButton}
            aria-controls="get-involved-dropdown"
            aria-expanded={activeDropdown === 'Get involved' && dropdownOpen}
            onFocus={handleFocusMenuItem}
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
              <div className={styles.SubDropdownWrapper}>
                <button
                  type="button"
                  role="menuitem"
                  className={styles.DropdownMenuButton}
                  data-navItem="Get involved"
                  data-menuItem="Events"
                  data-index={0}
                  tabIndex={-1}
                  ref={eventsRef}
                  onFocus={handleFocusSubNavItem}
                >
                  Events
                </button>
                <ul
                  className={classNames(
                    styles.DropdownMenu,
                    styles.SubDropdownMenu
                  )}
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
                      data-index={0}
                      tabIndex={-1}
                      ref={eventsRef}
                      data-href="/get-involved/events/mavens-conference"
                      onClick={handleNavigate}
                      onFocus={handleFocusSubNavItem}
                    >
                      Mavens I/O
                    </button>
                  </li>
                  <li role="none" className={styles.DropdownMenuItem}>
                    <button
                      type="button"
                      role="menuitem"
                      className={styles.DropdownMenuButton}
                      data-navItem="Get involved"
                      data-menuItem="Events"
                      data-index={1}
                      tabIndex={-1}
                      ref={eventsRef}
                      data-href="/get-involved/events/meetups"
                      onFocus={handleFocusSubNavItem}
                      onClick={handleNavigate}
                    >
                      Meetups
                    </button>
                  </li>
                </ul>
              </div>
            </li>
            <li role="none" className={styles.DropdownMenuItem}>
              <div className={styles.SubDropdownWrapper}>
                <button
                  type="button"
                  role="menuitem"
                  className={classNames(
                    styles.DropdownMenuButton,
                    styles.hasSubMenu
                  )}
                  onClick={handleNavigate}
                  data-navItem="Get involved"
                  data-menuItem="Programs"
                  data-index={1}
                  tabIndex={-1}
                  ref={programsRef}
                  onFocus={handleFocusSubNavItem}
                >
                  Programs
                </button>
                <ul
                  className={classNames(
                    styles.DropdownMenu,
                    styles.SubDropdownMenu
                  )}
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
                      data-index={0}
                      tabIndex={-1}
                      ref={eventsRef}
                      data-href="/get-involved/events"
                      onFocus={handleFocusSubNavItem}
                    >
                      Bounty Board
                    </button>
                  </li>
                </ul>
              </div>
            </li>
            <li role="none" className={styles.DropdownMenuItem}>
              <button
                type="button"
                role="menuitem"
                className={styles.DropdownMenuButton}
                data-navItem="Get involved"
                data-menuItem="Slack"
                data-href="https://t.co/Tyqbn7FNyv?amp=1"
                data-index={2}
                ref={slackRef}
                tabIndex={-1}
                onFocus={handleFocusSubNavItem}
              >
                Slack
              </button>
            </li>
          </ul>
        </div>
      </li>
      <li role="none" className={makeAnImpactClassName}>
        <div
          className={styles.DropdownWrapper}
          onKeyUp={handleDropdownKeyPress}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <button
            type="button"
            role="menuitem"
            data-navItem="Make an impact"
            data-index={2}
            className={styles.DropdownButton}
            aria-controls="make-an-impact-dropdown"
            aria-expanded={activeDropdown === 'Make an impact' && dropdownOpen}
            onFocus={handleFocusMenuItem}
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
                data-href="/make-an-impact/hire"
                data-navItem="Make an impact"
                data-menuItem="Hire"
                data-index={0}
                onClick={handleNavigate}
                onFocus={handleFocusSubNavItem}
              >
                Hire
              </button>
            </li>
            <li role="none" className={styles.DropdownMenuItem}>
              <button
                type="button"
                className={styles.DropdownMenuButton}
                tabIndex={-1}
                role="menuitem"
                ref={partnerRef}
                data-navItem="Make an impact"
                data-menuItem="Partner"
                data-href="/make-an-impact/partner"
                data-index={1}
                onClick={handleNavigate}
                onFocus={handleFocusSubNavItem}
              >
                Partner
              </button>
            </li>
            <li role="none" className={styles.DropdownMenuItem}>
              <button
                type="button"
                className={styles.DropdownMenuButton}
                tabIndex={-1}
                role="menuitem"
                ref={volunteerRef}
                data-navItem="Make an impact"
                data-menuItem="Volunteer"
                data-href="/make-an-impact/volunteer"
                data-index={2}
                onClick={handleNavigate}
                onFocus={handleFocusSubNavItem}
              >
                Volunteer
              </button>
            </li>
          </ul>
        </div>
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
            data-index={3}
            ref={donateRef}
            onFocus={handleFocusMenuItem}
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
      <div onKeyDown={handleMenuKeyPress}>{menuMarkup}</div>
    </nav>
  )
}
