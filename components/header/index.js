import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

function Header({ children }) {

  return (
    <div className={cn(styles.header)}>
      <div>Logo</div>
      <div>Giriş sayfası</div>
      <div>Dosyalarınız</div>
      <div>Oluştur</div>
      <div>Search</div>
      <div>Çan</div>
      <div>Avatar</div>
    </div>
  )
}

export default Header
