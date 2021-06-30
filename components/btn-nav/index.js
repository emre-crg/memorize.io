import React from 'react'
import Link from 'next/link'

import styles from './style.module.scss'

function BtnNav({ children }) {
  return (
    <Link href='/'>
      <a className={styles.btnNav}>
        <span>{children}</span>
      </a>
    </Link>
  )
}

export default BtnNav
