import React from 'react'
import {  HomeWrapper } from '../styles/BodyStyles'
import { Box, Button, Typography } from '@mui/material'
import booksImage  from "../profile/books.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <HomeWrapper>
      <div className='home-content'>
        <Typography variant="body2" className='heading'>
          Welcome to the Teacher-Student Interaction Platform.
        </Typography>
        <Typography variant="body2" className='homecontent'>
            Our platform is designed to facilitate seamless interaction between teachers and students. Teachers can easily add books with detailed information, while students can search for books and add them to their reading lists. Get started by choosing your role below.
        </Typography>
        <div>
          <Typography variant="body2" className='heading'>
            Get Started as a
          </Typography>
          <div className='button-container'>
            <Button component={Link} to="/teacher" variant="contained" className='single-button'>Teacher</Button>
            <Button component={Link} to="/student" variant="contained" className='single-button'>Student</Button>
          </div>
        </div>
      </div>
      <div className='image-container'>
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '100%',
          }}
          alt="Books"
          src={booksImage}
        />
      </div>
    </HomeWrapper>
  )
}

export default Home