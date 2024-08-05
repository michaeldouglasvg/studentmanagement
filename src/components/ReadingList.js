import React, { useState } from 'react';
import { ListItem, Button, Card, CardContent, CardActions, CardMedia, Typography, Grid, List, Snackbar, Alert } from '@mui/material';
import { useBookContext } from '../context/BookContext';

const ReadingList = () => {
  const { readingList, removeBookFromReadingList } = useBookContext();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleRemoveBookFromReadingList = (book) => {
    removeBookFromReadingList(book);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <List>
        <Grid container spacing={2}>
          {readingList.map((book, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <ListItem>
                <Card sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  <CardMedia
                    component="img"
                    sx={{ width: { xs: '100%', sm: 230 }, height: 'auto', objectFit: 'cover' }}
                    image={book.coverImage}
                    alt={book.title}
                  />
                  <div className='content'>
                    <CardContent sx={{ flex: 1, width: { xs: '100%', sm: 230 } }}>
                      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'black' }}>
                        TITLE: {book.title}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                        AUTHOR: {book.author}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={() => handleRemoveBookFromReadingList(book)}
                      >
                        Remove from Reading List
                      </Button>
                    </CardActions>
                  </div>
                </Card>
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </List>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Book removed from reading list successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ReadingList;
