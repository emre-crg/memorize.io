import React from 'react'

import styles from './style.module.scss'

function Avatar({ children, url }) {
  return (
    <div tabIndex={1} className={styles.avatar}>
      <img 
        src={url}
        alt="Avatar"
      />
    </div>
  )
}

export default Avatar