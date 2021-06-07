import React from 'react'
import SearchBar from '../../search-bar'

import styles from './style.module.scss'

function ContentRight({children}) {
  return (
    <div className={styles.contentRight}>
      <SearchBar>Ara</SearchBar>
      <div>Çan</div>
      <div>Avatar</div>
    </div>
  )  
}

export default ContentRight
