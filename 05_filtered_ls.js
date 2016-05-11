var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];
var givenExt = process.argv[3];

function extention(){
  fs.readdir(filePath, function (err, list){
    list.forEach(function(x){
       // var ext = path.extname(x).replace(/./, '');
       if (x.split(".")[1] == givenExt){
        console.log(x);
       }
      // function keep_extentions(x){
      //   ext == givenExt
      //   return x
      // }
      // console.log(list.filter(keep_extentions);
    });
  });
};

extention();
 