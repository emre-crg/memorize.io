import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

import CardDefauld from '../card-default'


function CardContainer( { children, title } ) {
  const [post, setPost] = useState([]);

  useEffect(() => {

    fetch('http://localhost:4001/sets')
    .then(res => res.json())
    .then(data => {
      setPost(data)
      console.log("data", data);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className={styles.container}>
      <h2>{title ? title : 'Recommended'}</h2>   
      <section className={styles.CardContainer}>

        { 
          post.map(item => (
            <CardDefauld  title={item.title} link={`view-card/${item.id}`}></CardDefauld>
          ))   
        }
      </section>
    </div>
  )
}

export default CardContainer
