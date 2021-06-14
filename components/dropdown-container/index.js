import React from 'react'

import styles from './style.module.scss'

function DropdownContainer( {children} ) {
  
  return (
    <nav className={styles.dropdownTab}>
      <ul tabIndex={1}>
        <li>Böllüm-1</li>
        <li>Böllüm-2</li>
        <li>Böllüm-3</li>
      </ul>
    </nav>
  )
}

export default DropdownContainer