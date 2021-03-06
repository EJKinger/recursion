// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string'){
  	return String("\"" + String(obj) + "\"");
  }
  else if (typeof obj === 'number'){
  	return String(obj);
  }
  else if (Array.isArray(obj)){
  	if (obj.length === 0){
  		return "[]";
  	}
  	else {
  		var arr = [];
  		obj.forEach(function(item){arr.push(stringifyJSON(item))})
  		return ("[" + String(arr) + "]");
  	}
  }
  else if (typeof obj === 'object'){
  	if (obj === null){
  		return String(obj);
  	}
  	else if (_.isEqual(obj, {})){
  		return "{}";
  	}
  	
  	else {
  		var retVal = "";
  		for (item in obj){
  			if ((obj[item] === 'undefined') || (typeof obj[item] === 'function')){
  				retVal = "";
  				return "{}";
  			}
  			retVal += stringifyJSON(item) + ":" + stringifyJSON(obj[item]) + ",";
  		}
  		retVal = retVal.slice(0, retVal.length - 1);
  		return "{" + retVal + "}";
  	}
  
  }
  else return String(obj);

};
