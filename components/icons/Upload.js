import * as React from 'react'

function SvgUpload(props) {
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
        d="M16 10v6H4v-6c0-1.5-2-1.5-2 0v6a2 2 0 002 2h12a2 2 0 002-2v-6c0-1.5-2-1.5-2 0z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.293 2.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V11a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414-1.414l3-3z"
        fill="#000"
      />
    </svg>
  )
}

export default SvgUpload
