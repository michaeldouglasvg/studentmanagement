import React from 'react'
import { BodyWrapper } from '../styles/BodyStyles'
import Home from '../pages/Home'
import Students from '../pages/Students'
import Teachers from '../pages/Teachers'

const BodyContent = () => {
  return (
    <BodyWrapper>
      <Home />
      <Students />
      <Teachers />
    </BodyWrapper>
  )
}

export default BodyContent