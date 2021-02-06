//obtenemos la informacion del formulario en publicacion.html y la guardamos en una variable
const form = document.forms['publicacion'];

//al dar submit, se realice la inserccion de los datos
form.onsubmit = (event) => {
    event.preventDefault();
    cargarJson()
    //console.log(cargarJson());
    //console.log(formDataToJSON());
}
//cargarJson();
function cargarJson(){
    var info = {};
    const xhttp1 = new XMLHttpRequest();
	xhttp1.open('GET', 'publicaciones.json', true);
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
    /*//creamos el json donde se guardara la nueva publicacion de informacion
    const publi =
        [{
            "nombreComerciante":"Carlos Pat Ek",
            "Descripcion":"Vendo 50 kilos de miel pura, venta inmediata.",
            "img":"img/publicacion1.jpg",
            "precioVenta":"$37",
            "fechaRegistro":"01/02/2021",
            "disponibilidad":"50 kilos"
        },
        {
            "nombreComerciante":"Jose Alejandro Lopez",
            "Descripcion":"Vendo 20 kilos de miel pura, venta inmediata, precio a tratar.",
            "img":"img/publicacion2.jpg",
            "precioVenta":"$45",
            "fechaRegistro":"01/02/2021",
            "disponibilidad":"20"
        },
        {
            "nombreComerciante":"Felipe de Jesús Dominguez Hernandez",
            "Descripcion":"Vendo 47 kilos de miel pura, venta y entrega inmediata.",
            "img":"img/publicacion3.jpg",
            "precioVenta":"$50",
            "fechaRegistro":"01/02/2021",
            "disponibilidad":"47"
        }, 
        { 
            "nombreComerciante":"Angel Alberto May Catzin",
            "Descripcion":"Vendo 29 kilos de miel pura, venta y entrega inmediata.",
            "img":"img/publicacion4.jpg",
            "precioVenta":"$30",
            "fechaRegistro":"01/02/2021",
            "disponibilidad":"29"
        }, 
        { 
            "nombreComerciante":"Angel Alberto May Catzin",
            "Descripcion":"Vendo 70 kilos de miel pura, venta y entrega inmediata.",
            "img":"img/publicacion5.jpg",
            "precioVenta":"$50",
            "fechaRegistro":"01/02/2021",
            "disponibilidad":"70"
        }, 
        { 
            "nombreComerciante":"Federico Alonso Tapía",
            "Descripcion":"Vendo 10 kilos de miel pura, venta y entrega inmediata.",
            "img":"img/publicacion6.jpg",
            "precioVenta":"$29",
            "fechaRegistro":"01/02/2021",
            "disponibilidad":"10"
        }, 
        ];*/

        validar();
    
        //arreglo donde estaran los datos del formulario
        Array.from(form.elements).forEach(element => {
        //si existe nombre de los elementros, cada valor se guardara en cada elemento
            if (element.name){
                //validar(expPrecio,expDisponibilidad);
                info[element.name] = element.value;
            }
        })
    return info;
}

function validar(){
    //----- Expresiones Regulares -----
    //Numeros enteros o nueros con hasta 2 decimales
    var expPrecio = /^[0-9]{1,4}$|^[0-9]{1,3}\.[0-9]{1,2}$/;
    //Solo numeros enteros
    var expDisponibilidad = /^[0-9]{1,4}$/;

    Array.from(form.elements).forEach(element => {
        if(element.name=="precioVenta"){
            //___________________________________________________
            var tipo1 = expPrecio.test(element.value);
            if(tipo1){
                Array.from(form.elements).forEach(element =>{
                    //-----------------------------------------
                    if(element.name=="disponibilidad"){
                        var tipo2 = expDisponibilidad.test(element.value);
                        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        if(tipo2){
                            //console.log("Disponibilidad Correcto");
                            regresar();
                            //window.location.href="index-access.html";
                        } else{
                            alert("La disponibilidad no es Correcto, solo numeros enteros");
                        }
                        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    }
                    //-----------------------------------------
                })
                //console.log("Precio Correcto");
            } else{
                alert("El Precio no es Correcto, debe tener 4 digitos o hasta 4 digitos y 2 decimales");
            }
            //_____________________________________________
        }
    })
}

function regresar(){
    window.location.href="index-access.html";
}