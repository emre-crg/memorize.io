import React from 'react'

import styles from './style.module.scss'
import NotificationIcon from '../icons/Notification'


function BtnNotification({ children }) {
  return (
    <a className={styles.btnNotify}>
      <NotificationIcon />
    </a>
  )
}

export default BtnNotification
