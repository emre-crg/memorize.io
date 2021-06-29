import React from 'react'
import { useRouter } from 'next/router'

import Layout from '../../components/layout'
import ViewCardPage from '../../components/view-card-page'


function ViewCard( {children}) {
  
  const router = useRouter()
  const { pid } = router.query

  console.log(router);

  return (
    <Layout>
      <ViewCardPage setId={pid}></ViewCardPage>
    </Layout>
  )
}

export default ViewCard