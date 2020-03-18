const express = require('express');
const path = require('path');
const cors = require('cors');
const loadPageRoutes = require('./routes/loadPageRoutes');

const app = express();

// Route handling and middlewares
app.use(cors());
app.use(express.json()); // express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object
app.use(loadPageRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Starting server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
