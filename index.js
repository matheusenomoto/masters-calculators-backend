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

//aws sdk
var AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    accessSecretKey: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION,
  });

//s3
s3 = new AWS.S3({apiVersion: '2006-03-01'});

var bucketParams = {
    Bucket : 'masters-calculators-pub',
  };

s3.listObjects(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });

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