import * as React from 'react'

function SvgBell(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 20c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V2C9.5 1.17 8.83.5 8 .5S6.5 1.17 6.5 2v.68C3.64 3.36 2 5.92 2 9v5L.207 15.793A.707.707 0 00.707 17h14.586a.707.707 0 00.5-1.207L14 14zm-2 1H4V9c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
        fill="#000"
      />
    </svg>
  )
}

export default SvgBell
