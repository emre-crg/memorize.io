import React from 'react'
import Link from 'next/link'

import cn from 'classnames'
import ArrowBottom from '../icons/ArrowBottom'
import DropdownContainer from '../dropdown-container'

import styles from './style.module.scss'

function BtnDropDown_None({ children, ...props }) {
  return (
    <a {...props}>
      <span>
        {children}
        <ArrowBottom />
      </span>
    </a>
  )
}

function BtnDropDown_Tabs({ children, tabs, ...props }) {
  return (
    <div className={styles.dropdownContainer}>
      <a tabIndex={1} {...props}>
        <span>
          {children}
          <ArrowBottom />
        </span>
      </a>

      {tabs === "menu" ? <DropdownContainer></DropdownContainer> : <span>span</span>}
      
    </div>
  )
}

function BtnDropDown({ children, className, colored, ...props }) {
  const Comp = props.tabs ? BtnDropDown_Tabs : BtnDropDown_None

  return (
    <Comp 
      className={cn(styles.btnDropDown, colored && styles.colored, className)} 
      {...props}
    > 
      {children} 
    </Comp>
  )
}

export default BtnDropDown
