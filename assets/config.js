'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {
	nombre: "Eder Lara Trujillo",
	profesion: "Desarrollador BigData",
	correo: "ederlara@misena.edu.co",
	telefono: "+57 311 5780589",
	perfil: "Máster en Bigdata & analítica, analista de modelos de negocios y administración de bases de datos. Habilidades para trabajar en equipo en comunidades de: Desarrollo de Software, soluciones informáticas, evaluación de proyectos, Gerente de Business Intelligence, Analista Senior, BI Consultant, Analista Big Data, Técnico de Inteligencia de Negocio, Consultor Senior BI, Jefe de Proyecto Big Data.",
	habilidades: {
		comunicativas:['Asertivo, ','Persuasivo, ','Actitud Positiva, ','Tolerancia, ','Respeto, ','Diálogo Abierto, ','Orden, ','Apoyo'],
		gestion: ['Liderazgo, ','Evaluación de Proyectos, ','Responsabilidad, ','Estrategias de Gestión, ','Análisis para toma de Decisiones'],
		tecnicas: ['Análisis de datos, ','Python (WEB / ETL), ','FullStack MEAN, ','Javascript, ','Bases de Datos SQL, ','MySQL - PlSQL, ', 'MongoDB - NoSQL', 'Office']
	},
	hobbies: ['Programar','Analítica','Escuchar Música', 'Ver Peliculas', 'Tocar Guitarra', 'Video-Juegos', 'Romper Corazones', 'Jugar Parchis']
}

// Dejar intácto a partir de aquí.
// Constantes SENA:
const banner = "https://3.bp.blogspot.com/-TkVKyVxdxgQ/U2kGFcBl3LI/AAAAAAAABVo/zrDM3ittaz0/s1600/Banner+Soy+Cultura+SENA+-+CTMA.png";
// const banner = "https://previews.123rf.com/images/tul/tul1706/tul170600011/79563965-concepto-de-dise%C3%B1o-de-banner-de-moda-vector-m%C3%BAsica-estilo-moderno-con-iconos-de-arte-de-l%C3%ADnea-fina-sobre-fond.jpg";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	// Sección lateral:
	$('#banner').html('<img src="'+banner+'" class="img-fluid mt-2" alt="">');
	$('#perfil').html(persona.perfil);
	$('#comunicativas').html(persona.habilidades.comunicativas);
	$('#gestion').html(persona.habilidades.gestion);
	$('#tecnicas').html(persona.habilidades.tecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	let aficiones = persona.hobbies.map(function(bar){
		return '<li class="list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}