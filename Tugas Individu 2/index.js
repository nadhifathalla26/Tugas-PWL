const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware json untuk membaca request body bertipe json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware router
const router = require('./router');
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
