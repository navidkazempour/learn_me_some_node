var fs = require('fs');
var path = require('path');


module.exports = function(filePath, givenExt, callback){
                    fs.readdir( filePath, function(err, list){
                      if (err){
                        return callback(err);
                      }
                      var arr = [];
                      list.forEach(function(x){
                        if (x.split(".")[1] == givenExt){
                        arr.push(x);
                        }
                      });
                      callback(null, arr);
                    });
                  };