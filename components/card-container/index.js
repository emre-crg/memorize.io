import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

import CardDefauld from '../card-default'


function CardContainer( { children, title } ) {

  return (
    <div className={styles.container}>
      <h2>{title ? title : 'Recommended'}</h2>   
      <section className={styles.CardContainer}>
        <CardDefauld item={8} title={"Verbs"}></CardDefauld>
        <CardDefauld item={36} title={"English Verbs"}></CardDefauld>
        <CardDefauld item={75} title={"irregular verbs"}></CardDefauld>
        <CardDefauld item={48} title={"Adventures"}></CardDefauld>
        <CardDefauld item={899} title={"Dememe"}></CardDefauld>
        <CardDefauld item={789} title={"Dememe 02"}></CardDefauld>
        <CardDefauld item={78} title={"irregular verbs"}></CardDefauld>
        <CardDefauld title={"irregular verbs"}></CardDefauld>
        <CardDefauld title={"irregular verbs"}></CardDefauld>
        <CardDefauld item={8754} ></CardDefauld>
        <CardDefauld item={33} ></CardDefauld>
        <CardDefauld item={78} ></CardDefauld>
      </section>
    </div>
  )
}

export default CardContainer
