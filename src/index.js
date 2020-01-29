const express = require('express');
const port = process.env.PORT || 9000;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index'));

app.listen(port);
console.log(`Server listening on port ${port}`);