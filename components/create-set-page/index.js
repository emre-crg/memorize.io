import React from 'react'
import cn from 'classnames'

import { Form } from 'semantic-ui-react'

import styles from './style.module.scss'
import TermContent from './term-row'
import CreateSetForm from './create-set-form'

// const FormExampleForm = () => (
//   <Form>
//     <Form.Field>
//       <label>First Name</label>
//       <input placeholder="First Name" />
//     </Form.Field>
//     <Form.Field>
//       <label>Last Name</label>
//       <input placeholder="Last Name" />
//     </Form.Field>
//     <Form.Field>
//       <Checkbox label="I agree to the Terms and Conditions" />
//     </Form.Field>
//     <Button type="submit">Submit</Button>
//   </Form>
// )

function CreateSetPage({ children }) {
  return (
    <div className={styles.CreateSetPage}>
      <div className={styles.CreateSetHeader}>
        <div className={styles.CreateSetHeaderTitle}>
          <span>Yeni çalışma seti oluştur</span>
        </div>
        <div className={styles.CreateSetHeaderButton}>
          <button>Oluştur</button>
        </div>
      </div>

      <Form>
        <Form.Field>
          <label>Adı</label>
          <input placeholder="Set Adı" />
        </Form.Field>
        <Form.Field>
          <label>Açıklama</label>
          <input placeholder="Set Açıklama" />
        </Form.Field>
      </Form>

      <TermContent></TermContent>
    </div>
  )
}

export default CreateSetPage
