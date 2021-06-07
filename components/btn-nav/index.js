import React from 'react'

import styles from './style.module.scss'

function BtnHeader({ children }) {
  return (
    <a className={styles.btnHeader}>
      <span>{children}</span>
    </a>
  )
}

export default BtnHeader
