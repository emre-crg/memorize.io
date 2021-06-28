import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'


function Main({ children }) {

  return (
    <div className={cn(styles.main)}>
      {children}

    </div>
  )
}

export default Main
