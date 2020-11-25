const db = require('../models');
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/api/books', async function(req, res){
  let result = await db.Book.find({});
  console.log('[get /api/books]', result);
  res.json(result);
});

router.post('/api/books', async function(req, res) {
  console.log('[post /api/books]', req.body);
  let result;
  try {
    result = await db.Book.create(req.body);
  } catch(err) {
    result = {};
    console.log('[post /api/books] error=', err)
  }
  console.log('[post /api/books]', result);
  res.json(result);
});

router.delete('/api/books/:id', async function(req, res){
  let result = await db.Book.findByIdAndDelete(req.params.id);
  console.log('[delete /api/books/:id]', result);
  res.json(result);
});

// Relay google api queries through server
router.get('/api/googlebooks', async function(req, res) {
  let url = `https://www.googleapis.com/books/v1/volumes?key=${process.env.API_KEY}&projection=lite&orderBy=newest&q=${req.query.q}`;
  console.log(`[get /api/googlebooks?q=q] url=${url}`);
  let results;
  try  {
    results = await axios.get(url);
  } catch(err) {
    console.log('[get /api/googlebooks] Error=',err)
    results = [];
  }

  let id, title, authors, description, smallThumbnail, previewLink;
  // construct our own book item object
  const formattedResult = results.data.items.map(function(book) {
    // Destructure api data + assign default values for missing fields
    // Add saved field for ui
    ({id, 
      volumeInfo: {
        title, 
        authors = [],
        description = '',
        imageLinks: {smallThumbnail} = {smallThumbnail: 'https://via.placeholder.com/125'}, 
        previewLink
      }} = book);
      return ({
        _id: id, title, authors, description, image: smallThumbnail, link: previewLink, saved: false
      });
  })
  console.log('[get /api/googlebooks]', formattedResult);
  res.json(formattedResult);
});

module.exports = router;