import * as React from 'react'

function SvgSets(props) {
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
        d="M3 19v-2H1a2 2 0 002 2zm-2-2h2V5H1v12zm2 2h12v-2H3v2zM17 1H7a2 2 0 00-2 2v10a2 2 0 002 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 12H7V3h10v10z"
        fill="#000"
      />
    </svg>
  )
}

export default SvgSets
