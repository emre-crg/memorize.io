import React from 'react'
import Link from 'next/link'

import styles from './style.module.scss'

function DropdownContainer_Menu( {children} ) {
  
  return (
    <nav className={styles.dropdownMenu}>
        <Link href={'#'}>Çalışma Setleri</Link>
        <Link href={'#'}>Klasör</Link>
        <Link href={'#'}>Sınıf</Link>
    </nav>
  )
}

export default DropdownContainer_Menu