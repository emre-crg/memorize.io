import React from 'react'

import cn from 'classnames'
import SearchIcon from '../icons/Search'

import styles from './style.module.scss'

function SearchBar({ children }) {
  return (
    <form className={styles.searchBar}>
      <SearchIcon />
      <input type="text" placeholder={children}></input>
    </form>
  )
}

export default SearchBar
