import React from 'react'

import styles from './style.module.scss'

import cn from 'classnames'
import NotificationIcon from '../icons/Notification'
import DropdownContainer from '../dropdown-container'

function BtnNotification({ children , tabs , ...props }) {
  return (
    <div className={cn(styles.btnNotifyContainer, styles.btnDropDown)}>
      <a tabIndex={1} className={styles.btnNotify}>
        <NotificationIcon />
      </a>

      <DropdownContainer tabs={tabs} />
    </div>
  )
}

export default BtnNotification
