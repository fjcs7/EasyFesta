'use strict';

// dependencies
const mongoose = require('mongoose');

// set the database name
const dbName = 'easyfesta';

// connect to the database
mongoose.connect(`mongodb://mat:manutencao2018@ds261342.mlab.com:61342/${dbName}`);

// get notified if the connection
// was successful or not
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log(`Connected to the ${dbName} database`);
});
