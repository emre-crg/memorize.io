import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

import LogoIcon from '../icons/Logo'

function Logo() {
  return (
    <div className={cn([styles.logo])}>
      <LogoIcon />
    </div>
  )
}
export default Logo