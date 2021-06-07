import React from 'react'
import BtnNotification from '../../notification-btn'
import SearchBar from '../../search-bar'

import styles from './style.module.scss'

function ContentRight({children}) {
  return (
    <div className={styles.contentRight}>
      <SearchBar>Ara</SearchBar>
      <BtnNotification></BtnNotification>
      <div>Avatar</div>
    </div>
  )  
}

export default ContentRight
