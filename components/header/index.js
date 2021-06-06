import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

import Logo from '../logo/index'

function Header({ children }) {

  return (
    <div className={cn(styles.header)}>
      <Logo />
      <div>Giriş sayfası</div>
      <div>deneme</div>
      <div>Oluştur</div>
      <div>Search</div>
      <div>Çan</div>
      <div>Avatar</div>
    </div>
  )
}

export default Header
