import React, { useState } from 'react';
import { TextField, Button, Grid, Card, CardMedia, Snackbar, Alert } from '@mui/material';
import { useBookContext } from '../context/BookContext';

const AddBookForm = () => {
  const { addNewBook } = useBookContext();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [readingLevel, setReadingLevel] = useState(''); 
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, coverImage, readingLevel };
    addNewBook(newBook);
    setTitle('');
    setAuthor('');
    setCoverImage(null);
    setReadingLevel('');
    setOpenSnackbar(true);
  };

  const handleImageChange = (e) => {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 style={{ fontSize: "2rem", marginTop: "1rem"}}>Add Book details</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField 
              label="Title" 
              variant="outlined" 
              fullWidth 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
              margin="normal"
            />
            <TextField 
              label="Author" 
              variant="outlined" 
              fullWidth 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)} 
              required 
              margin="normal"
            />
            <TextField 
              label="Reading Level" // New input field for reading level
              variant="outlined" 
              fullWidth 
              value={readingLevel} 
              onChange={(e) => setReadingLevel(e.target.value)} 
              required 
              margin="normal"
            />
            <input 
              accept="image/*" 
              style={{ display: 'none' }} 
              id="raised-button-file" 
              type="file" 
              onChange={handleImageChange}
              required
            />
            <label htmlFor="raised-button-file">
              {coverImage ? (
                <Button 
                  variant="contained" 
                  color="primary" 
                  component="span"
                  sx={{ mt: 2 }}
                >
                  Change the file
                </Button>
              ) : (
                <Button 
                  variant="contained" 
                  color="primary" 
                  component="span"
                  sx={{ mt: 2 }}
                >
                  Upload Cover Image
                </Button>
              )}
            </label>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              fullWidth
              sx={{ mt: 2, padding: ".8rem 1rem" }}
            >
              Add Book
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: { xs: '1rem', sm: '-2rem' } }}>
            {coverImage && <h1 style={{ fontSize: "2rem", marginTop: {xs: "1rem", sm: "-2rem"}}}>Image Preview</h1>}
            {coverImage && (
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={coverImage}
                  alt="Cover Image Preview"
                />
              </Card>
            )}
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Book added successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddBookForm;
