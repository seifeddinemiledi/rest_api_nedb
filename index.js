  var express = require('express');
  var nedb = require('nedb');
  var expressNedbRest = require('express-nedb-rest');
  var path = require('path');
  var cors = require('cors');

  var app = express();
  app.use(cors());

  var datastoruser = new nedb({ filename: path.join(__dirname, 'data/user.db'), autoload: true });
  
  var restApi = expressNedbRest();

  restApi.addDatastore('user', datastoruser);

  app.use('/', restApi);

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });