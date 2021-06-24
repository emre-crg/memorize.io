import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import Link from 'next/link'

import cn from 'classnames'

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

const deneme = () => {
  return (
    <span>Deneme</span>
  )
}



function DropdownContainer_UnderlineNavbar( {children} ) {

  const handleClick = () => {
    console.log('handleClick Çalıştı...')
    ReactDOM.render(
      <span>Çalışma</span>,
      document.querySelector('.dropdown-body')
     );
  }
  
  const handleClick2 = () => {
    console.log('handleClick Çalıştı...')
    ReactDOM.render(
      <span>Açıklamalar</span>,
      document.querySelector('.dropdown-body')
     );
  }
  
  const handleClick3 = () => {
    console.log('handleClick Çalıştı...')
    ReactDOM.render(
      <span>Klasörler</span>,
      document.querySelector('.dropdown-body')
     );
  }
  const handleClick4 = () => {
    console.log('handleClick Çalıştı...')
    ReactDOM.render(
      <span>Sınıflar</span>,
      document.querySelector('.dropdown-body')
     );
  }

  return (
    <nav className={styles.dropdownUnderLine}>
      <div className={cn( styles.dropdownUnderLine_head, 'dropdown-head')}>
        <button onClick={handleClick}>Çalışma Setleri</button>
        <button onClick={handleClick2}>Açıklamalar</button>
        <button onClick={handleClick3}>Klasörler</button>
        <button onClick={handleClick4}>Sınıflar</button>
      </div>

      <div className={cn(styles.dropdownUnderLine_body, 'dropdown-body')}>
        body
      </div>
    </nav>
  )

}

function Empty() {
  return(
    <></>
  )
}


function DropdownContainer( {children, tabs, ...props} ) {
  const Comp = (tabs === 'menu') ? DropdownContainer_Menu 
              : (tabs === 'underline') ? DropdownContainer_UnderlineNavbar 
              : Empty
  
  return (
    <Comp
      {...props}
    >
      {children}
    </Comp>
  )
}


export default DropdownContainer