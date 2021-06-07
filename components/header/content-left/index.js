import React from 'react'

import Logo from '../../logo'
import BtnHeader from '../../btn-nav'
import BtnDropDown from '../../btn-dropdown'

import styles from './style.module.scss'

function ContentLeft({children}) {
  return (
    <div className={styles.contentLeft}>
      <Logo />
      <BtnHeader>Giriş Sayfası</BtnHeader>
      <BtnDropDown>Dosyalarınız</BtnDropDown>
      <BtnDropDown colored={true}>Oluştur</BtnDropDown>
    </div>
  )  
}

export default ContentLeft
