//variables
var comerciantes;
var cardContainer;
var createTaskCard;
var card;
var cardImg;
var cardBody
var descripcionL;
var title;
var boton;
var initListOfTasks;

//Creando json de comerciantes
comerciantes = [{
        "id": "1",
        "nombreComerciante": "Angel Alberto May Catzin",
        "descripcion": "Vendo miel , tengo 23 kilos de miel pura, contactar para más información",
        "img": "img/comerciante1.jpg",
        "municipio": "Felipe Carrillo Puerto",
        "localidad": "Andres Quintana Roo",
        "telefono": "9831125674",
        "correo": "a.a.m.cat@gmail.com",
        "precioVenta": "$37",
    },
    {
         "id": "2",
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

createTaskCard = (task) => {
    //creamos un elemento DIV con la clase card de Bootstrap4
    col1 = document.createElement('div');
    col1.className = 'col col-sm-12 col-md-4 col-lg-4';
    col1.setAttribute('style','padding: 15px 15px;');
    card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('style','background: #fffbf4;');
    //Creamos un elemento imagen 
    cardImg = document.createElement('img');
    cardImg.className = 'card-img-top';
    //Obtenemos la ruta de la imagen del Json y se lo agregamos al src del elemento img
    cardImg.src=task.img;
    cardImg.setAttribute('style','padding: 15px 15px;');
    //Creamos un DIV con la clase card-body
    cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    //Creamos un H5 con la clase card-title
    title = document.createElement('h5');
    //Obtenemos del Json el nombre del comerciantes y se asigna
    title.innerText = task.nombreComerciante;
    title.className = 'card-title';
    //Creamos un p para agregar la descripción del comerciantes del Json
    descripcionL = document.createElement('p');
    descripcionL.innerText = task.descripcion;
    //el parrafo es de la clase card-text
    descripcionL.className = 'card-text';
    //Creamos un boton
    boton = document.createElement("button");
    boton.innerHTML = 'Ver comerciante';
    //Asiganos clases de Bootstrap
    boton.className = 'btn btn-primary';
    boton.setAttribute('style','padding: 15px 15px;');
    //Agregamos lo correspondiente
    col1.appendChild(card);
    card.appendChild(cardImg);
    cardBody.appendChild(title);
    cardBody.appendChild(descripcionL);
    card.appendChild(cardBody);
    card.appendChild(boton);
    cardContainer.appendChild(col1);
}
initListOfTasks = () => {
    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }

    cardContainer = document.getElementById('card-container');
    //Iteración del Json de comerciantes
    comerciantes.forEach((task) => {
        //Llamando a la función para crear las tarjetas de los comerciantes
        createTaskCard(task);
    });
};
initListOfTasks();