const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/login', (req, res) => {
  const { name } = req.query;
  res.cookie('name', name);
  res.send('Cookie set successfully');
});

app.get('/hello', (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.send(`Welcome ${name}!`);
  } else {
    res.send('Please login first');
  }
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

