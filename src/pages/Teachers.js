import React from 'react'
import { TeacherWrappaer } from '../styles/TeacherWrapper'
import AddBookForm from '../components/AddBookForm'

const Teachers = () => {

  return (
    <TeacherWrappaer>
      <div className='display'>
        <AddBookForm />
      </div>
    </TeacherWrappaer>
  )
}

export default Teachers