import React, { useState, useEffect } from 'react'

import { Form, Message } from 'semantic-ui-react'

import styles from './style.module.scss'

import api from '../../api'

function CreateFolder() {

  
  const [table, setTable] = useState({ title: '', statement: '', author: '' })
  const [error, setError] = useState('')

  const onInputChange = (event) => {
    console.log('onChance Çaıştı', event)
    setTable({ ...table, [event.target.name]: event.target.value })
  }

  //Set bilgilerini Post eder
  const onFormSubmit = (event) => {
    event.preventDefault()
    setError('')
    alert("Klasör Eklendi")

    setTable({ title: '', statement: '', author: '' })

    // refreshPage()
  }


  return (
    <div className={styles.CreateSetPage}>
      <div className={styles.CreateSetHeader}>
        <div className={styles.CreateSetHeaderTitle}>
          <span>Yeni klasör oluştur</span>
        </div>
        <div className={styles.CreateSetHeaderButton}>
          <button onClick={onFormSubmit}>Oluştur</button>
        </div>
      </div>

      <Form className={styles.Form}>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Klasör Adı</label>
            <input
              name="title"
              onChange={onInputChange}
              value={table.title}
              placeholder="Klasör Adı"
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
        </Form.Group>

        <Form.Field>
          <label>Açıklama</label>
          <input
            name="statement"
            onChange={onInputChange}
            value={table.statement}
            placeholder="Klasör Açıklama"
          />
        </Form.Field>
      </Form>
    </div>
  )
}

export default CreateFolder
