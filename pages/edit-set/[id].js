import React, { useEffect, useState }  from 'react'
import { useRouter } from 'next/router'

import Layout from '../../components/layout'
import EditSetPage from '../../components/edit-set-page'


function EditSet( {children}) {

  const router = useRouter()
  const { pid } = router.query

 
  return (
    <Layout>
      <EditSetPage setId={pid}></EditSetPage>
    </Layout>
  )
}

export default EditSet