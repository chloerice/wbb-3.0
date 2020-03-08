import React from 'react'

export default function Footer() {
  const copyrightYear = `${new Date().getFullYear()}`
  return (
    <footer id="footer">
      <div className="inner"></div>
      <div className="end">
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
            <a
              href="https://youtube.com/webuildblack"
              className="icon fa-youtube"
            >
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
            <a
              href="https://github.com/WeBuildBlack"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
        <p className="copyright">We Build Black &copy; {copyrightYear}</p>
      </div>
    </footer>
  )
}
