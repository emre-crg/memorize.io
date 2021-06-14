import React from 'react'

import styles from './style.module.scss'

function BtnNav({ children }) {
  return (
    <a className={styles.btnNav}>
      <span>{children}</span>
    </a>
  )
}

export default BtnNav
