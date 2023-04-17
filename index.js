const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Dragon is running')
});

app.get('/categories', (req, res) =>{
    console.log(categories);
    res.send(categories);
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})
