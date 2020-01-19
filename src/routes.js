const express = require('express');
// const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');


const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'uday243#',
  database : 'movies_director'
})

const app = express();
app.use(cors());

app.get('/users', function (req, res) {
    connection.getConnection(function (err, connection) {
    connection.query('SELECT * FROM dir_table', function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send(results)
      
    });
  });
});

app.listen(3001, () => {
 console.log('Go to http://localhost:3001/users so you can see the data.');
});
