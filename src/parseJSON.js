// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var str;
  var retVal;
  var removeEnds = function(str){
  	var acc = {'"': 0, "'": 0, '{': 0, '}': 0, '[': 0, ']': 0};;
  	if ((str[0] in acc) && (str[str.length - 1] in acc)){
  	  return str.slice(1, str.length -1);
  	}
  	else return str;
  }

  if ((json[0] === "[") && (json[json.length - 1] === "]")){
  	if (json === '[]'){
  		return [];
  	}
  	str = removeEnds(json);
  	str = str.replace(/, /, ",");
    retVal = str.split(',');
    retVal.forEach(function(item, index, retVal){
    	retVal[index] = parseJSON(item);
    });
    return retVal;
  }
  else if ((json[0] === "{") && (json[json.length - 1] === "}")){
  	retVal = {};
  	if (json === '{}'){
  		return retVal;
  	}
  	str = removeEnds(json).split(', ');
    str.forEach(function(item, index, str){str[index] = item.split(': ')});
  	str.forEach(function(item){
  		retVal[parseJSON(item[0])] = parseJSON(item[1]);
  	})
  	return retVal;
  }
  else if (typeof json === 'string'){
  	if (json === "null"){
  		return null;
  	}
  	if (json === "true"){
  		return true;
  	}
  	if (json === "false"){
  		return false;
  	}
  	if (/-?\d*.?\d+/.test(json)){
  		return Number(json);
  	}
  	else return removeEnds(json);
  }
  
  //else console.log('invalid input');

};