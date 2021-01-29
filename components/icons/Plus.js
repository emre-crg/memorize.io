import * as React from 'react'

function SvgPlus(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 11h-6v6c0 .55-.45 1-1 1s-1-.45-1-1v-6H3c-.55 0-1-.45-1-1s.45-1 1-1h6V3c0-.55.45-1 1-1s1 .45 1 1v6h6c.55 0 1 .45 1 1s-.45 1-1 1z"
        fill="#000"
      />
    </svg>
  )
}

export default SvgPlus
