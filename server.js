'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');
var bodyParser = require('body-parser');
var app = express();
var upload = multer({ dest: 'uploads/' })

app.use(bodyParser.json());
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post("/api/fileanalyse", upload.single('upfile'), (req, res, next) => {
  const temp = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  }
  return res.json(temp);
});



app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
