import React from 'react'

import cn from 'classnames'

import DropdownContainer from '../dropdown-container'

import styles from './style.module.scss'

function Avatar({ children, url, tabs, ...props }) {
  return (
    <div className={cn(styles.btnNotifyContainer, styles.btnDropDown)}>
      <div tabIndex={1} className={styles.avatar}>
        <img 
          src={url}
          alt="Avatar"
        />
      </div>

      <DropdownContainer tabs={tabs} />
    </div>
  )
}

export default Avatar