# leccion20-ejercicio2

##Código inicial

``` javascript

var feature = "closures";
(function () {
if ( typeof feature === "undefined"){         
var feature = "callbacks";         
	console.log("JS coders love its " + feature );     
	} else {       
	console.log("JS developers love its " + feature );     
	}
 })();
```


##Código final

``` javascript

var feature = "closures";
(function () {
if ( typeof feature === "undefined"){         
	feature = "callbacks";         
		console.log("JS coders love its " + feature );     
	} else {       
	console.log("JS developers love its " + feature );     
	}
 })();
```
##Cambio
Se eleimino el `var` para que cuando se ejucute la función no lea la asigación de feature callbacks. Si no lea de la variable global feature clousures y muestre le mensaje que se pide.

##Contexto

En el código inicial está definida la variable feature, pero de manera global, la función
anónima no la esta reconociendo, para esa función la variable no está definida y muestra
el primer mensaje, al colocarla dentro de la función anónima, la variable ya estaría definida de manera local y cumpliría la
segunda condición.
