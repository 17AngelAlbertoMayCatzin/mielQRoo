
      //Esta funcion agrega usuario al sistema
      function crearCuenta(form) {
        if( form.elements["psw-repeat"].value != "" &&
            form.elements["psw"].value != "" && 
            form.elements["email"].value != "" &&
            form.elements["nombre"].value != "" &&
            form.elements["apellido"].value != "" &&
            form.elements["municipio"].value != "" &&
            form.elements["localidad"].value != "" &&
            form.elements["telefono"].value != "" &&
            form.elements["usuario"].value != ""
            
            ){
                validarEmail(form.elements["email"].value);
                    if(form.elements["psw"].value == form.elements["psw-repeat"].value){
                        if(validarContrasena(form.elements["psw"].value)){
                            correo = form.elements["email"].value;
                            nombre = form.elements["nombre"].value +" "+form.elements["apellido"].value;
                            municipio = form.elements["municipio"].value;
                            localidad = form.elements["localidad"].value;
                            telefono = form.elements["telefono"].value;
                            usuario = form.elements["usuario"].value;
                            contrasena = form.elements["psw"].value;

                            alert("Usuario registrado correctamente \n\n"
                            +"Correo: "+correo+"\n"
                            +"Nombre: "+nombre+"\n"
                            +"Municipio: "+municipio+"\n"
                            +"Localidad: "+localidad+"\n"
                            +"Telefono: "+telefono+"\n"
                            +"Usuario: "+usuario+"\n"
                            +"Contrasena: "+contrasena+"\n"
                            );
                            window.close();
                        }
                    }
                    else{
                        alert("Las constraseñas no coinsiden");
                    }
                
            }          
      }
function validarEmail(valor) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(valor)){
    //alert("Correo electronico válido");
    return true;
    } else {
        alert("Correo electronico no válido");
    }
}

function validarContrasena(valor) {
    if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(valor)){
    //alert("Contraseña válida");
    return true;
    } else {
        alert("Contraseña no válida \nLa contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. \nNO puede tener otros símbolos.");
    }
}

function cerrar(){
    window.close();
}