import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

import Header from '../header'


function Layout({ children }) {

  return (
    <div className={cn(styles.layout)}>
      <Header />
      <div>Sidebar</div>
      <div>Main</div>
    </div>
  )
}

export default Layout
