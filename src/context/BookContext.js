import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);
  const [currentTab, setTab] = useState("");

  useEffect(() => {
    const storedReadingList = localStorage.getItem('readingList');
    if (storedReadingList) {
      setReadingList(JSON.parse(storedReadingList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('readingList', JSON.stringify(readingList));
  }, [readingList]);

  const setCurrentTab = (tabname) => {
    if (tabname !== "" || tabname !== "undefined") {
      setTab(tabname);
    } else {
      return false;
    }
  };

  const addBookToReadingList = (book) => {
    setReadingList([book, ...readingList]);
  };

  const removeBookFromReadingList = (book) => {
    setReadingList(readingList.filter(b => b.title !== book.title));
  };

  const addNewBook = async (newBook) => {
    console.log({newBook})
    try {
      const response = await axios.post('http://localhost:4000/graphql', {
        query: `
          mutation AddBook($title: String!, $author: String!, $coverPhotoURL: String!, $readingLevel: String!) {
            addBook(title: $title, author: $author, coverPhotoURL: $coverPhotoURL, readingLevel: $readingLevel) {
              id
              title
              author
              coverPhotoURL
              readingLevel
            }
          }
        `,
        variables: {
          title: newBook.title,
          author: newBook.author,
          coverPhotoURL: newBook.coverImage, 
          readingLevel: newBook.readingLevel,
        }
      });

      if (response.data && response.data.data) {
        const addedBook = response.data.data.addBook;
        setBooks([addedBook, ...books]);
      }
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const values = {
    books,
    setBooks,
    readingList,
    addBookToReadingList,
    removeBookFromReadingList,
    addNewBook,
    currentTab,
    setCurrentTab
  };

  return (
    <BookContext.Provider value={values}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  return useContext(BookContext);
};
