import React from 'react'

import Layout from '../components/layout'
import CardContainer from '../components/card-container'

function HomePage({ children }) {
  return (
    <Layout>
      <CardContainer title={'Kelime Setlerim'}></CardContainer>
    </Layout>
  )
}

export default HomePage