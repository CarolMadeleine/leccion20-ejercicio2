(function(){
	var feature = "cloures";
	if (typeof feature === "undefined"){
		var feature = "callbacks";
		console.log("JS coders love its " + feature);
	} else {
		console.log("JS developers love its " + feature);
	}
})();