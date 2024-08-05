import React from 'react'
import { StudentWrapper } from '../styles/StudentWrapper'
import BookSearch from '../components/BookSearch'
import BookList from '../components/BookList'
import ReadingList from '../components/ReadingList'
import { useLocation } from 'react-router-dom';
import { useBookContext } from '../context/BookContext'
import { SearchContainer } from '../styles/BodyStyles'

const Students = () => {
  const { currentTab } = useBookContext();
  const location = useLocation();
  const path = location.pathname;

  return (
    <StudentWrapper>
      <SearchContainer>
       <BookSearch />
      </SearchContainer>
      <div className='display'>
       {(path === "/student" && currentTab !== "readinglist") && <BookList />}
       {(path === "/student"  && currentTab === "readinglist") && <ReadingList />}
      </div>
    </StudentWrapper>
  )
}

export default Students