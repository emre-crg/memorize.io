import React from 'react'
import cn from 'classnames'

import { Button, Card, Image } from 'semantic-ui-react'

import Link from 'next/link'

import api from '../../api'

import styles from './style.module.scss'

function CardDefauld({ children, title, item, link, id }) {
  
  function refreshPage() {
    setTimeout(function() { window.location.reload(false); }, 1000);
  }

  const CardDelete = () => {

    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }

    fetch(`${api.hostname}/sets/${id}`, requestOptions)
    .then((res) => {
      console.log(res)
    })
    refreshPage()
  }
  
  return (
    <div className={cn(styles.cardDefauld)}>
      <Link href={link ? link : '/view-card/3'}>
        <a>
          <h3>{title ? title : 'Title'}</h3>
          <span>{item ? `${item} terim` : `11 terim`}</span>
          <div className={styles.buttonContainer}>
            {/* 
              <Link href={`/edit-set/${id}`}>Düzenle</Link>
            </Button>
            <Button basic color="red">
              <Link href={'/'}>Sil</Link>
            </Button> */}

            <Link href={`/edit-set/${id}`}>
              <Button basic color="green">Düzenle</Button>
            </Link>

            <Link href={'/'}>
              <Button onClick={CardDelete} basic color="red">Sil</Button>
            </Link>

          </div>
        </a>
      </Link>
    </div>
  )
}

export default CardDefauld
