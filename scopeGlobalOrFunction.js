//global scope - identifiers can be accessed everywhere within your program
//function scope - identifiers can be accessed everywhere inside the funcion it was defined in
//block scope - 

var a = 1; 	//global scope
	function x() {
	var b = 2; 	//function scope to x, y, z
		function y() {
		var c = 3;	//function scope to y, z
			function z() {
      			var d = 4;	//function scope to z
    			} z();
  		} y();
	} x();
