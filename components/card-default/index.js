import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'


function CardDefauld({title,item, children }) {

  return (
    <div className={cn(styles.cardDefauld)}>
      <h3>{title ? title : "Title"}</h3>   
      <span>{item ? `${item} terim` : `11 terim`}</span>
    </div>
  )
}

export default CardDefauld
