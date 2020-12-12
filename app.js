const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Demo!");
});
 
module.exports.app = app;
