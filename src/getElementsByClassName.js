// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

  var inArr = function(str, arr){
  	for (var i = 0; i < arr.length; i++){
  		if (str === arr[i]){
  			return true;
  		}
  	}
  	return false;
  }
  var retArr = [];
  // your code here
  var classes = className.split(' ');
  if (classes.length > 1){
  	var hold = [];
  	classes.forEach(function(item){
	  if ((hold === getElementsByClassName(item)) || (hold === [])){  
  	  	hold = getElementsByClassName(item);
  	  }
  	})
  	retArr.concat(hold);
  }

  classes.forEach(function(item){
  	if (classes.length > 1){

  	  retArr.concat(getElementsByClassName(item));
    } 
  })

  var bodyClassNames = [];
  for (var i = 0; i < document.body.classList.length; i++){
  	bodyClassNames.push(document.body.classList[i]);
  }
  if (inArr(className, bodyClassNames)){
  	retArr.push(document.body)
  }

  var childNodeCheck = function(node){
    for (var i = 0; i < node.length; i++){
  	  var thisClassNames = [];
  	  if (node[i].classList){
        for (var j = 0; j < node[i].classList.length; j++){
          thisClassNames.push(node[i].classList[j]);
        }
        thisClassNames.forEach(function(item){
      	  if (className === item){
      		retArr.push(node[i]);
      	  }
        })
  	  }
  	  if (node[i].childNodes !== []){
  	  	childNodeCheck(node[i].childNodes);
  	  }
  	}
  }

  childNodeCheck(document.body.childNodes);
  return retArr;
};

