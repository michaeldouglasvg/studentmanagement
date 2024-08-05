import React, { useState, useEffect } from 'react';
import { Alert, Button, Card, CardActions, CardContent, CardMedia, ListItem, Snackbar, TextField, Typography } from '@mui/material';
import { useBookContext } from '../context/BookContext';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const { books, addBookToReadingList } = useBookContext();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleAddBookToReadingList = (book) => {
    addBookToReadingList(book);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };


  useEffect(() => {
    const handleDelayedSearch = async () => {
      if (query.length > 2) { 
        const filteredSuggestions = books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filteredSuggestions.slice(0, 5)); 
      } else {
        setSuggestions([]);
      }
    };

    const timeoutId = setTimeout(handleDelayedSearch, 300); 

    return () => clearTimeout(timeoutId);
  }, [query, books]);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };
  
  return (
    <>
    <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Book added to reading list successfully!
        </Alert>
      </Snackbar>
      <TextField
        label="Search Books"
        variant="outlined"
        fullWidth
        onChange={handleSearchChange}
        value={query}
      />
      {suggestions.length > 0 && (
        <div className='searchresults'>
          <ul>
            {suggestions.map((book, index) => (
              <ListItem key={index}>
              <Card sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: { xs: '100%', sm: 100 }, height: '100px', objectFit: 'cover' }}
                  image={book.coverImage}
                  alt={book.title}
                />
                <div className='content'>
                  <CardContent sx={{ flex: 1, width: { xs: '100%', sm: 500 } }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'black', marginBottom: "-.2rem" }}>
                      TITLE: {book.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                      AUTHOR: {book.author}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => handleAddBookToReadingList(book)}
                    >
                      Add to Reading List
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </ListItem>
            ))}
          </ul>
         </div>
      )}
    </>
  );
};

export default BookSearch;
