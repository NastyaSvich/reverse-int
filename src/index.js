module.exports = function reverse (n) {
  var q;
  if(n<0){
  q = ('' + n).slice(1);
  return (('' + q).split('').reverse().join(''));
  }
return (('' + n).split('').reverse().join(''));
  }
