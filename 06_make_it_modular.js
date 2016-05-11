var mymodule = require('./06_mymodule.js')
var filePath = process.argv[2];
var givenExt = process.argv[3];

mymodule(filePath, givenExt, function(err, list){
  if (err){
     return console.log('error occured', err);
  }
  list.forEach(function(element){
    console.log(element);
  })
}); 