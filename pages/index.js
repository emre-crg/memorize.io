import React from 'react'

import Layout from '../components/layout'
import CardContainer from '../components/card-container'

function HomePage({ children }) {
  return (
    <Layout>
      <CardContainer title={'Önerilenler'}></CardContainer>
      <CardContainer title={'Kelime Setlerim'}>{children}</CardContainer>
    </Layout>
  )
}

export default HomePage