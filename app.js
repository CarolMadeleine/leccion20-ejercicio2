var feature = "cloures";
(function(){
	if (typeof feature === "undefined"){
		feature = "callbacks";
		console.log("JS coders love its " + feature);
	} else {
		console.log("JS developers love its " + feature);
	}
})();
