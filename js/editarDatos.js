//obtenemos la informacion del formulario en publicacion.html y la guardamos en una variable
const form = document.forms['datos'];

//al dar submit, se realice la inserccion de los datos
form.onsubmit = (event) => {
    event.preventDefault();
    cargarJson()
    //console.log(formDataToJSON());
}
//cargarJson();
function cargarJson(){
    var info = {};
    const xhttp1 = new XMLHttpRequest();
	xhttp1.open('GET', 'usuarios.json', true);
	xhttp1.send();
	xhttp1.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			//console.log(this.responseText);
			info = JSON.parse(this.responseText);
            formDataToJSON(info);
            console.log(info);
		}
        return info;
	}
}

function formDataToJSON(info) {
        validar();
        //arreglo donde estaran los datos del formulario
        Array.from(form.elements).forEach(element => {
        //si existe nombre de los elementros, cada valor se guardara en cada elemento
            if (element.name){
                info[element.name] = element.value;
            }
        })
    return info;
}

function validar(){
    //----- Expresiones Regulares -----

    //Numeros enteros o nueros con hasta 2 decimales
    var expCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //Solo numeros enteros
    var expContraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    var psw1 = false;
    var tipo1;
    var psw2 = false;
    var tipo2;
    Array.from(form.elements).forEach(element => {
        if (element.name=="correoElectronico"){
            ///////////////////////////////////////////////////////
            var tipo = expCorreo.test(element.value);
            if(tipo){
                Array.from(form.elements).forEach(element => {
                    if(element.name=="psw"){
                        //___________________________________________________
                        tipo1 = element.value;
                        psw1 = expContraseña.test(element.value);
                        if(psw1){
                            Array.from(form.elements).forEach(element =>{
                                //-----------------------------------------
                                if(element.name=="psw-repeat"){
                                    tipo2 = element.value;
                                    psw2 = expContraseña.test(element.value);
                                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                    if(psw2){
                                        //******************************************_
                                        if(tipo1==tipo2){
                                            console.log("Contraseñas Iguales");
                                            //regresar();
                                            //window.location.href="index-access.html";
                                        } else{
                                            console.log("Contraseñas Distintas");
                                        }
                                        //******************************************
                                    } else{
                                        alert("La contraseña repetida no es válida");
                                    }
                                    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                }
                                //-----------------------------------------
                            })
                            //console.log("Precio Correcto");
                        } else{
                            alert("La Contraseña Nueva no válida \nLa contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. \nNO puede tener otros símbolos.");
                            //alert("La Contraseña no es válida");
                        }
                        //_____________________________________________
                    }
                })
            } else{
                alert("El Correo no es válido");
            }
            ///////////////////////////////////////////////////////
        }
    })
}

function regresar(){
    window.location.href="index-access.html";
}