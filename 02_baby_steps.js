// console.log(process.argv);

var arr = process.argv.slice(2);
var num = 0;

arr.forEach(function(x){
  num += Number(x);
});
console.log(num);


