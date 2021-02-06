var usuario;
var contrasena;
var dato = {};
//AJAX
//Objeto XMLHttpRequest para realizar solicitudes de red para recuperar el json usuarios
function cargarJson() {
	const xhttp = new XMLHttpRequest();//Instancia
	//Abriendo una nueva solicitud utilizando el método open()
    //Se hace mediante el método get, la ruta del archivo y true para que sea asincrono
	xhttp.open('GET', 'usuarios.json', true);
	//Se envía la solicitud con el método send()
	xhttp.send();
	//Conseguimos la respuesta de la solicitud
	xhttp.onreadystatechange = function(){
		//Validamos el estado
		if(this.readyState == 4 && this.status == 200){
			//console.log(this.responseText);
			//Recibimos un texto, y se transforma a JSON con parse
			 dato = JSON.parse(this.responseText);
			 //Llamamos a la función y mandamos el json de publicaciones
			//  iniciarSesion(dato);
		}
	}
}
cargarJson();

function iniciarSesion(){
	console.log(dato);
	usuario = document.getElementById("username").value;
	contrasena = document.getElementById("password").value;
	var userAndPasswordPresent = false;
	for (var i in dato) {
		if (dato[i].user === usuario && dato[i].password === contrasena) {
			userAndPasswordPresent = true;
		}
	}
	if(userAndPasswordPresent==true){
	alert('Bienvenido');
	  window.open("index-access.html");
	} 
}

