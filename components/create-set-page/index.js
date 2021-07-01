import React, { useState, useEffect } from 'react'
import cn from 'classnames'

import { Form, Message } from 'semantic-ui-react'

import styles from './style.module.scss'
import TermContent from './term-row'

import api from '../../api'

function CreateSetPage({ children }) {
  
  useEffect(() => {
    //Çalışma setlerini getitiriyor...

    fetch(`${api.hostname}/sets`)
      .then((res) => res.json())
      .then((data) => {
        let arr = data.map((item) => {
          let obj = {}

          obj.text = item.title
          obj.value = item.id
          console.log('obj', obj)

          return obj
          // setSelectInput({ text: data.title, value: data.id })
        })
        return arr
      })
      .then((item) => {
        setSelectInput(item)
      })
  }, [])


  const [table, setTable] = useState({ title: '', statement: '', author: '' })
  const [error, setError] = useState('')

  const [cardTable, setCardTable] = useState({
    sets_id: '',
    term: '',
    definition: ''
  })
  const [errorCardTable, setErrorCardTable] = useState('')

  const [selectInput, setSelectInput] = useState(null)

  function refreshPage() {
    window.location.reload(false);
  }

  const onInputChange = (event) => {
    console.log('onChance Çaıştı', event)
    setTable({ ...table, [event.target.name]: event.target.value })
  }

  const onCardInputChange = (event) => {
    console.log('onChance Çaıştı', event)
    setCardTable({ ...cardTable, [event.target.name]: event.target.value })
  }

  //Set bilgilerini Post eder
  const onFormSetsSubmit = (event) => {
    event.preventDefault()
    setError('')

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: table.title,
        statement: table.statement,
        creator_name: table.author
      })
    }

    fetch(`${api.hostname}/sets`, requestOptions).then((res) => {
      res.status != 201
        ? setError('Zorunlu alanlar: "Başlık", "Açıklama" veya "Author" eksik')
        : setError('')
    })

    setTable({ title: '', statement: '', author: '' })

    refreshPage()
  }

  //Card bilgilerini Post eder
  const onFormCardSubmit = (event) => {
    event.preventDefault()
    setErrorCardTable('')

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        term: cardTable.term,
        definition: cardTable.definition,
      })
    }

    fetch(
      `${api.hostname}/card/${cardTable.sets_id}`,
      requestOptions
    ).then((res) => {
      res.status == 401
        ? setErrorCardTable(
            'Zorunlu alanlar: "Terim", "Tanım" veya "Set Bilgisi" eksik'
          )
        : setErrorCardTable('')
    })

    setCardTable({ sets_id: '', term: '', definition: '' })
  }

  const getSetId = () => {
    return selectInput
  }

  return (
    <div className={styles.CreateSetPage}>
      <div className={styles.CreateSetHeader}>
        <div className={styles.CreateSetHeaderTitle}>
          <span>Yeni çalışma seti oluştur</span>
        </div>
        <div className={styles.CreateSetHeaderButton}>
          <button onClick={onFormSetsSubmit}>Oluştur</button>
        </div>
      </div>

      {error && <Message error header="Hata" content={error} />}

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

      {/* Card Ekleme Kısmı */}
      <div className={styles.CreateSetHeader}>
        <div className={styles.CreateSetHeaderTitle}>
          <span>Yeni Card oluştur</span>
        </div>
        <div className={styles.CreateSetHeaderButton}>
          <button onClick={onFormCardSubmit}>Oluştur</button>
        </div>
      </div>

      {errorCardTable && (
        <Message error header="Hata" content={errorCardTable} />
      )}

      <Form className={styles.Form}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Terim"
            name="term"
            onChange={onCardInputChange}
            value={cardTable.term}
            placeholder="İngilizce"
          />
          <Form.Input
            fluid
            label="Tanım"
            name="definition"
            onChange={onCardInputChange}
            value={cardTable.definition}
            placeholder="Türkçe"
          />
          <Form.Select
            fluid
            label="Set Bilgisi"
            name="sets_id"
            value={cardTable.sets_id}
            options={getSetId()}
            placeholder="Çalışma Setleri"
            onChange={(e, { value }) => setCardTable({ ...cardTable, sets_id: value })}         
          />
        </Form.Group>
      </Form>

      {/* <TermContent></TermContent> */}
    </div>
  )
}

export default CreateSetPage
