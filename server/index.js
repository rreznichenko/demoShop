const express = require('express');
const app  = express();
const cors =  require('cors');

const router = require('./router');

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.all('*', (req, res) => {
    router(req, res);
})


app.listen(3000, () => {
    console.log('started');
})