import React, { useState, useEffect } from 'react'

import { Form, Message } from 'semantic-ui-react'

import styles from './style.module.scss'


function EditSetPage( {children} ) {

  const [table, setTable] = useState({ title: '', statement: '', author: '' })

  const onInputChange = (event) => {
    console.log('onChance Çaıştı', event)
    setTable({ ...table, [event.target.name]: event.target.value })
  }

  //Set bilgilerine PATCH işlemi yapılır
  const onFormSetsSubmit = (event) => {
    event.preventDefault()

    // Windows nesnesinden url ucu alınıyor...
    let url = window.location.href.split('/');
    url = url[url.length-1]

    //Fetch body değişkeni düzenleniyor...
    let BODY = {}
    
    table.title && (BODY.title = table.title)
    table.statement && (BODY.statement = table.statement)
    table.author && (BODY.creator_name = table.author)
    

    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(BODY)
    }

    fetch(`http://localhost:4001/sets/${url}`, requestOptions).then((res) => {
      console.log(res);
    })

    setTable({ title: '', statement: '', author: '' })
  }
  
  
  return (
    <div className={styles.Page}>      
      <div className={styles.Header}>
        <div className={styles.HeaderTitle}>
          <span>Çalışma Setini Düzenle</span>
        </div>
        <div className={styles.HeaderButton}>
          <button onClick={onFormSetsSubmit}>Düzenle</button>
        </div>
      </div>
      

      <Form className={styles.Form}>
        <Form.Field>
          <label>Başlık</label>
          <input
            name="title"
            onChange={onInputChange}
            value={table.title}
            placeholder="Set Adı"
          />
        </Form.Field>
        <Form.Field>
          <label>Açıklama</label>
          <input
            name="statement"
            onChange={onInputChange}
            value={table.statement}
            placeholder="Set Açıklama"
          />
        </Form.Field>
        <Form.Field>
          <label>Oluşturan Kişi</label>
          <input
            name="author"
            onChange={onInputChange}
            value={table.author}
            placeholder="Yazar"
          />
        </Form.Field>
      </Form>


    </div>
  )
}

export default EditSetPage
