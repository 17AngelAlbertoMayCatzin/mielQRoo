var usuario;
var contrasena;
//Creando json de comerciantes
comerciantes = [{
        "id": "1",
        "user": "Maca",
        "password": "123",
        "nombreComerciante": "Angel Alberto May Catzin",
        "descripcion": "Vendo miel , tengo 23 kilos de miel pura, contactar para más información",
        "img": "img/comerciante1.jpg",
        "municipio": "Felipe Carrillo Puerto",
        "localidad": "Andres Quintana Roo",
        "telefono": "9831125674",
        "correo": "a.a.m.cat@gmail.com",
        "precioVenta": "$37",
        "user": "Maca",
        "password": "123",
    },
    {
        "id": "2",
        "user": "JoseLopez",
        "password": "123",
        "nombreComerciante": "Jose Alejandro Lopez",
        "descripcion": "Soy apicultor de la comunidad de Limones, tengo disponible 50 kilos de miel a excelente precio. Contactame para más información",
        "img": "img/comerciante2.jpg",
        "municipio": "Bacalar",
        "localidad": "Limones",
        "telefono": "9831127869",
        "correo": "j.a.l@gmail.com",
        "precioVenta": "$40",
    },
    {
        "id": "3",
        "user": "FelipeDoMi",
        "password": "123",
        "nombreComerciante": "Felipe de Jesús Dominguez Hernandez",
        "descripcion": "Soy apicultor de la comunidad de Tusik, tengo disponible 10 kilos de miel a excelente precio. Contactame para más información",
        "img": "img/comerciante3.jpg",
        "municipio": "Felipe Carrillo Puerto",
        "localidad": "Tusik",
        "telefono": "9831127854",
        "correo": "f.jesus.dH@gmail.com",
        "precioVenta": "$29",
    }, 
    { 
         "id": "4",
        "nombreComerciante": "Carlos Pat Ek",
        "descripcion": "Soy apicultor de la comunidad de Limones, tengo disponible 23 kilos de miel a excelente precio. Contactame para más información",
        "img": "img/comerciante4.jpg",
        "municipio": "Bacalar",
        "localidad": "Limones",
        "telefono": "9831124569",
        "correo": "c.p.e@gmail.com",
        "precioVenta": "$40",
    }, 
    { 
         "id": "5",
        "nombreComerciante": "Federico Alonso Tapía",
        "descripcion": "Soy apicultor de la comunidad de Noh-Bec, tengo disponible 50 kilos de miel a excelente precio. Contactame para más información",
        "img": "img/comerciante5.jpg",
        "municipio": "Felipe Carrillo Puerto",
        "localidad": "Noh-Bec",
        "telefono": "9831113869",
        "correo": "f.a.ta@gmail.com",
        "precioVenta": "$28",
    }, 
    { 
         "id": "6",
        "nombreComerciante": "Maria Lopez Pech",
        "descripcion": "Soy apicultora de la comunidad de Limones, tengo disponible 50 kilos de miel a excelente precio. Contactame para más información",
        "img": "img/comerciante6.jpg",
        "municipio": "Bacalar",
        "localidad": "Maya Balam",
        "telefono": "9832327869",
        "correo": "m.l.pech@gmail.com",
        "precioVenta": "$45",
    }, 
];
// console.log(usuario+contrasena);
function iniciarSesion(){
usuario = document.getElementById("username").value;
contrasena = document.getElementById("password").value;
var userAndPasswordPresent = false;
for (var i in comerciantes) {
    if (comerciantes[i].user === usuario && comerciantes[i].password === contrasena) {
        userAndPasswordPresent = true;
    }
}
if(userAndPasswordPresent==true){
    alert('Hola');
  window.open("index.html");
} else{
    alert(userAndPasswordPresent);
}
}
