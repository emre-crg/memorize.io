import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

function Photo({
  src = 'https://avatars.githubusercontent.com/u/49869820?s=460&u=bfa470168cd4c283f6f7f4d6cbd87a6d82659154&v=4',
  alt,
  size = 47
}) {
  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  )
}
export default Photo