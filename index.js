const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//environment
require('dotenv').config()

app.set('view engine', 'ejs')
app.use(express.static('public'));

//body-parser config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app
const { cards } = require('./src/constants')

//routes
app.get('/', (req, res) => {
    res.render('index', {
        cards: cards,
    })
})


app.listen(process.env.APP_PORT, (err) => {
    if (err) {
        console.log('error')
    } else {
        console.log(`server is up on ${process.env.APP_PORT}`)
    }
})