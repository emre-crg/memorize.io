import React from 'react'
import cn from 'classnames'

import Link from 'next/link'

import styles from './style.module.scss'


function CardDefauld({ children, title, item, link }) {

  return (
    <div className={cn(styles.cardDefauld)}>
      <Link href={link ? link : "/view-card/3"}>
        <a>
        <h3>{title ? title : "Title"}</h3>   
        <span>{item ? `${item} terim` : `11 terim`}</span>
        </a>
      </Link>
    </div>
  )
}

export default CardDefauld
