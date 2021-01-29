import * as React from 'react'

function SvgFolder(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.17 4l2 2H18v10H2V4h5.17zM8 2H2C.9 2 .01 2.9.01 4L0 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-8L8 2z"
        fill="#000"
      />
    </svg>
  )
}

export default SvgFolder
