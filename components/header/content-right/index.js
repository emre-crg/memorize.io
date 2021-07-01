import React from 'react'

import BtnNotification from '../../notification-btn'
import SearchBar from '../../search-bar'
import Avatar from '../../avatar'

import styles from './style.module.scss'

function ContentRight({children}) {
  return (
    <div className={styles.contentRight}>
      <SearchBar>Ara</SearchBar>
      <BtnNotification tabs={"notify"} />
      <Avatar url={"https://avatars.githubusercontent.com/u/49869820?v=4"} />
    </div>
  )  
}

export default ContentRight
