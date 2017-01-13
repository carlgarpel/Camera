var app = {
	inicio: function() {
		this.iniciaFastClick();
		this.iniciaBoton();
	},

	iniciaFastClick: function () {
		FastClick.attach (document.body);
	},


	iniciaBoton: function() {
	var	buttonAction = document.querySelector('#button-action');
	buttonAction.addEventListener('click', this.tomarFoto);
	var	buttonAction2 = document.querySelector('#button-action2');
	buttonAction.addEventListener('click', this.tomarFoto2);	
	},

	tomarFoto: function() {
	var opciones = {
		quality:50,
		destinationType: Camera.DestinationType.FILE_URI,
		targetWidth: 300,
		targetHeight: 300,
		correcOrientation: true
	};
		navigator.camera.getPicture(app.fotoTomada, app.errorAlTomarFoto, opciones);
		var salida= document.querySelector('.header');
		salida.innerHTML ="Carlos: hombre joven de gran atractivo";
	},
	
	tomarFoto2: function() {
	var opciones = {
		quality:50,
		destinationType: Camera.DestinationType.FILE_URI,
		targetWidth: 300,
		targetHeight: 300,
		correcOrientation: true
	};
		navigator.camera.getPicture(app.fotoTomada, app.errorAlTomarFoto, opciones);
		var salida= document.querySelector('.header');
		salida.innerHTML ="Langle: Mujer madura de gran atractivo";
	},

	fotoTomada: function(imageURI) {
	var image = document.querySelector('#foto');
	image.src= imageURI;
	
	},

	errorAlTomarFoto: function(message){
	console.log ("Fallo al tomar foto o toma cancelada: " + message);
	}
};
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		app.inicio();
	}, false);
}

