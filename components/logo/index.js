import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './style.module.scss'

import LogoIcon from '../icons/MemorizeIo'

function Logo() {
  return (
    <Link href={'/'} >
      <a className={cn(styles.logo)}>
        <LogoIcon />
      </a>
    </Link>
  )
}
export default Logo