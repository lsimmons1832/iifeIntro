// var outside = "global";

// function scopeStuff() {
// 	var inside = "local";
// 	// console.log("outside from inside the function", outside); //global
// 	// console.log("inside from inside the function", inside); //local
// }

// console.log("outside from outside the function", outside); //global
// //console.log("inside from outside the function", inside); //local

// //scopeStuff();


// var global_base = ;

// function throwAway(){
// 	global_base+=500;
// 	console.log(global_base);
// }

// //**wrapping a function in an () will change it to an expression**\\
// //**you will need a second set of () and a ; to invoke the function**\\

// throwAway();

var cats = (function(){
	var color = "black";
	var type = "tiger";

	//return color; //**add return to print string
	return { //add object containing function to function
		getColor: function(){
			return color;
		},
		getType: function(){
			return type;
		},
		setColor: function(newColor){
			color = newColor;
		}
	};
})();

//console.log(cats.color); //will get an error message because it's a local/private variable
//console.log(cats.getColor());//black
console.log(cats);