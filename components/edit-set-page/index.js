import React, { useState, useEffect } from 'react'

import { Form, Item, Message, Table } from 'semantic-ui-react'

import api from '../../api'

import styles from './style.module.scss'

function EditSetPage({ children }) {
  const [table, setTable] = useState({ title: '', statement: '', author: '' })
  const [data, setData] = useState([])

  useEffect(() => {
    // Windows nesnesinden url ucu alınıyor...
    let url = window.location.href.split('/')
    url = url[url.length - 1]

    //Çalışma setlerini getitiriyor...
    fetch(`${api.hostname}/sets/${url}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("dATA", data)
        return Object.values(data)
      }).then(arr => {
        setData(arr)
        console.log("arr", arr)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  function refreshPage() {
    setTimeout(function() { window.location.reload(false); }, 1000);
  }

  const onInputChange = (event) => {
    console.log('onChance Çaıştı', event)
    setTable({ ...table, [event.target.name]: event.target.value })
  }

  //Set bilgilerine PATCH işlemi yapılır
  const onFormSetsSubmit = (event) => {
    event.preventDefault()

    // Windows nesnesinden url ucu alınıyor...
    let url = window.location.href.split('/')
    url = url[url.length - 1]

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

    fetch(`${api.hostname}/sets/${url}`, requestOptions)
    .then((res) => {
      console.log(res)
    })

    setTable({ title: '', statement: '', author: '' })
    refreshPage()
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

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Başlık</Table.HeaderCell>
            <Table.HeaderCell>Oluşturan Kişi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            {
              data.map(item => (
                <Table.Cell>{item}</Table.Cell>
              ))
            }
            
            {/* <Table.Cell>lorem</Table.Cell>
            <Table.Cell>lorem</Table.Cell> */}
          </Table.Row>
        </Table.Body>
      </Table>
      
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
