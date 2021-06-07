import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

import Logo from '../logo/index'
import ContentLeft from './content-left'
import ContentRight from './content-right'

function Header({ children }) {

  return (
    <div className={cn(styles.header)}>
      <ContentLeft />
      <ContentRight />
    </div>
  )
}

export default Header
