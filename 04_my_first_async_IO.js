var fs = require('fs');
var text = process.argv[2];
var lines = 0;

function contents(){
  fs.readFile(text, 'utf8', function callback(err, data){ 
    lines = data.split('\n').length - 1;
    console.log(lines);
  });
}

contents();
    