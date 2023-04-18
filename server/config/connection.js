const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mattchief4234:BabyHaladialavabe4234!@cluster0.bz0pbzh.mongodb.net/test'// <-- insert mongo db info --> 
, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
