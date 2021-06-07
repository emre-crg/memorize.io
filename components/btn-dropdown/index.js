import React from 'react'

import cn from 'classnames'
import ArrowBottom from '../icons/ArrowBottom'

import styles from './style.module.scss'

function BtnDropDown({ colored, children }) {
  return (
    <a className={cn(
      styles.btnDropDown,
      colored && styles.colored
    )}>
      <span>
        {children} 
        <ArrowBottom /> 
      </span>
    </a>
  )
}

export default BtnDropDown
