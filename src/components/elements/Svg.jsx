import React, { Fragment } from 'react'

const HAMBURGER = 'hamburger'
const LAPTOP = 'laptop'

const Svg = ({ icon, ...props }) => (
  <Fragment>
    {icon == HAMBURGER && (
      <svg
        width="22"
        height="13"
        viewBox="0 0 22 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M1 6.5H21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 11.5H21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 1.5H21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
    {icon == LAPTOP && (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468.293 468.293"><path d="M51.817 292.245V60.712c0-6.897 5.591-12.488 12.488-12.488h339.682c6.897 0 12.488 5.591 12.488 12.488v231.533H51.817z" fill="#3a556a" /><path fill="#64798a" d="M0 388.119l51.817-95.874h364.658l51.818 95.874z" /><path fill="#ebf0f3" d="M66.635 63.038h335.023v214.416H66.635z" /><path d="M0 388.119h468.293v19.462c0 6.897-5.591 12.488-12.488 12.488H12.488C5.591 420.068 0 414.477 0 407.581v-19.462z" fill="#3a556a" /><path fill="#e1e6e9" d="M284.098 365.836h-99.903l16.682-30.611h66.539z" /><g fill="#d5d6db"><path d="M126.15 85.92l-30.701 30.701a6.241 6.241 0 000 8.829 6.222 6.222 0 004.415 1.829c1.598 0 3.195-.61 4.415-1.829l30.701-30.7a6.241 6.241 0 000-8.829 6.242 6.242 0 00-8.83-.001zM117.535 141.939l-19.39 19.39a6.241 6.241 0 000 8.829 6.222 6.222 0 004.415 1.829c1.598 0 3.195-.61 4.415-1.829l19.39-19.39a6.241 6.241 0 000-8.829 6.243 6.243 0 00-8.83 0zM180.23 88.076a6.241 6.241 0 00-8.829 0l-32.665 32.665a6.241 6.241 0 000 8.829c1.22 1.22 2.817 1.829 4.415 1.829s3.195-.61 4.415-1.829l32.665-32.665a6.242 6.242 0 00-.001-8.829z" /></g></svg>
    )}
  </Fragment>
)

export default Svg