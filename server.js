const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('./config.json');

mongoose.connect(`mongodb+srv://<${MONGO_USER}>:<${MONGO_PASSWORD}>@sophiecluster-lhxyp.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`we're connected!`);
});
//
// app.get('/',function(req,res){
//     res.send('Welcome! This is our portfolio.');
// });
//





// Sophie works above this line, larissa works below below this line



// Listen to port 3000
app.listen(port, () => {
    console.clear();
    console.log(`application is running on port ${port}`);
});
