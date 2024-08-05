import React from 'react'
import { FooterStyles } from '../styles/FooterStyles'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <FooterStyles>
      <Typography variant="body2" color="#ffffff">
        Copyright&copy;2024ebook.com || All rights reserved
      </Typography>
    </FooterStyles>
  )
}

export default Footer