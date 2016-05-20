// Pretty standard server.js file
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());

require('./server/config/db.js');
require('./server/config/customer_routes.js')(app);
require('./server/config/order_routes.js')(app);
require('./server/config/product_routes.js')(app);

app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});