import React from 'react'

import Logo from '../../logo'
import BtnNav from '../../btn-nav'
import BtnDropDown from '../../btn-dropdown'

import styles from './style.module.scss'

function ContentLeft({children}) {
  return (
    <div className={styles.contentLeft}>
      <Logo />
      <BtnNav>Giriş Sayfası</BtnNav>
      <BtnDropDown>Dosyalarınız</BtnDropDown>
      <BtnDropDown colored tabs={"tabs"}>Oluştur</BtnDropDown>
    </div>
  )  
}

export default ContentLeft
