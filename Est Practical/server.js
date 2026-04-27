const express = require('express');
const app = express();

app.use(express.json());

app.post('/posts', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Post received!' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});