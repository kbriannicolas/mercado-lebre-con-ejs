const express = require('express');
const morgan = require('morgan');
const router = require('./src/routes/body');

const app = express();

const port = process.env.PORT || 3001;



app.set('view engine','ejs');

app.use(express.static('public'));
app.use(router);


app.use(morgan('dev'));

app.listen(port, () => console.log(`servidor escuchando en puerto ${port}`));