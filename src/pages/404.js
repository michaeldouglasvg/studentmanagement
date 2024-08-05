import React from 'react'
import { ErrorPageWrapper } from '../styles/ErrorPageStyles'
import { Typography } from '@mui/material'

const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
       <Typography variant="body2" color="orangered" fontSize={30}>
        404 
      </Typography>
      <Typography variant="body2" fontSize={20}> 
        Page not Found !!!
      </Typography>
    </ErrorPageWrapper>
  )
}

export default ErrorPage