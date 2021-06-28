import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

import Header from '../header'
import Main from '../main'


function Layout({ children }) {

  return (
    <div className={cn(styles.layout)}>
      <Header></Header>
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
