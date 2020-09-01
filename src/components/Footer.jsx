import React from 'react'

import wbbLogo from '../assets/images/wbb-logo-square-no-bg.svg'

export default function Footer() {
  const copyrightMarkup = (
    <p className="copyright">
      We Build Black &copy; {`${new Date().getFullYear()}`}
    </p>
  )

  const iconMarkup = (
    <ul className="icons">
      <li>
        <a
          href="https://instagram.com/webuildblack"
          className="icon fa-instagram"
        >
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://youtube.com/webuildblack" className="icon fa-youtube">
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/company/we-build-black"
          className="icon fa-linkedin"
        >
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/webuildblack"
          className="icon alt fa-twitter"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://facebook.com/WeBuildBlackOfficial"
          className="icon fa-facebook"
        >
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/WeBuildBlack" className="icon fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
  )

  const footerLeftMarkup = (
    <div className="footer-left">
      <div className="footer-left-content">
        <h3>Make an impact</h3>
        <ul className="footer-links">
          <li>
            <a href="/donate">Donate</a>
          </li>
          <li>
            <a href="/contact">Hire</a>
          </li>
          <li>
            <a href="/contact">Partner</a>
          </li>
          <li>
            <a href="/contact">Volunteer</a>
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <img src={wbbLogo} alt="" />
      </div>
    </div>
  )

  const footerRightMarkup = (
    <div className="footer-right">
      <h3>Get in touch</h3>
      <p className="p-condensed">We Build Black</p>
      <p className="p-condensed">147 Front Street</p>
      <p>Brooklyn, NY 11201</p>
      <p>info@webuildblack.com</p>
      <h3>Stay in the loop</h3>
      <p>
        Subscribe to be first to know about the latest community news, events,
        and job opportunities.
      </p>
      <div className="field half">
        <label className="label-hidden" htmlFor="email">
          Email
        </label>
        <input type="text" name="email" id="email" placeholder="Email" />
      </div>
    </div>
  )

  return (
    <footer id="footer">
      <div className="footer-main">
        {footerLeftMarkup}
        {footerRightMarkup}
      </div>
      <div className="footer-end">
        {iconMarkup}
        {copyrightMarkup}
      </div>
    </footer>
  )
}
