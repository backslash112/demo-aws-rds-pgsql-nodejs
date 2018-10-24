var express = require('express');
var router = express.Router();
const pg = require('pg');
var conString = "postgres://cyang:12345678@rds-postgresql-10mintutorial-2.cztezipjkluu.us-east-1.rds.amazonaws.com:5432/mydb";
const client = new pg.Client(conString);
client.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  const grades = [
    {id: 1, name: 'Yang', course: 'CS571', grade: 95},
    {id: 2, name: 'Cun', course: 'CS572', grade: 99}
  ];
  res.json(grades);
});

module.exports = router;
