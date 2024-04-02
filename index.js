const path = require('path');
const express = require('express');
//app == advancedServer
const app = express(); //returns a web server object (store in variable)

//whenev server making request, look for the file in the public folder
app.use(express.static(path.join(__dirname, 'public'))); //__dirname is the current directory) 


//localhost:8081
app.listen(8081, () => {
  console.log('Server is running on port 8081');
});