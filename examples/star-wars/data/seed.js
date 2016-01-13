import mongoose from 'mongoose';
import BrainStructure from '../src/server/brainStructure';
const brainStructures = require('./data.json');

// connect to mongo

mongoose.connect('mongodb://localhost/graphql');


// drop brain structures collection

mongoose.connection.collections['brainstructures'].drop(function(err) {

  BrainStructure.create(brainStructures, function(err, res){

    if (err) {
      console.log(err);
    }
    else {
      console.log('Seed data created.');
    }

    process.exit();

  });

});
