const express = require('express');
const Connection = require('../Backend/Database/Db.js');
const port = 5000;
const app = express();
const ProductsRouter = require('./Controller/Products.js'); 
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api', ProductsRouter); 
Connection();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


