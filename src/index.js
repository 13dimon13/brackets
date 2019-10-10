module.exports = function check(str, bracketsConfig) {
  // your solution
  var arr = str.split('');
        
  for(var i = 0; i < bracketsConfig.length; i++){

  var lastIndex = arr.lastIndexOf(bracketsConfig[i][0]);

  var secondIndex = arr.indexOf(bracketsConfig[i][1], lastIndex);


  if(lastIndex == 0 && secondIndex == 1 && arr.length == 2){

  arr.splice(lastIndex,2);

  return true;

  }

  while(lastIndex && secondIndex != -1){

  var lastIndex = arr.lastIndexOf(bracketsConfig[i][0]);

  var secondIndex = arr.indexOf(bracketsConfig[i][1], lastIndex);

  arr.splice(lastIndex);

  arr.splice(secondIndex);

  }
  
  }
  if(arr.length > 0){

  return false;

  }
  else{

  return true; 

  }
}
