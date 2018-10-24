var express = require('express');
var router = express.Router();
const pg = require('pg');
var conString = "postgres://username:pwd@host:5432/databasename";
const client = new pg.Client(conString);
client.connect();

/* GET product list. */
router.get('/', function(req, res, next) {
  client.query('select * from product', [], (err, result) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(result.rows[0]);
    }
    res.json(result.rows);
    // client.end();
  });
});

router.post('/', function(req, res, next) {
  const text = 'INSERT INTO product(name, price, description) VALUES($1, $2, $3) RETURNING *';
  const values = [req.body.name, req.body.price, req.body.desc];
  client.query(text, values, (err, result) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(result.rows[0]);
      res.json({success: true});
    }
  });
});

module.exports = router;