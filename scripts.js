// Obtener elementos del DOM mediante su ID
const titulo = document.querySelector('#tituloPagina');
const boton = document.querySelector('#botonClick');

// Obtener elementos del DOM con selectores
const enlace = document.querySelector('a');
const formulario = document.querySelector('form');
const texto = document.querySelectorAll('.text-success');
const boton2 = document.querySelector('#botonClick');
const enlaceFB = document.querySelector('a[href*="facebook"]');
const enlacesSeguros = document.querySelectorAll('a[href^="https"]');

// Imprimir elementos obtenidos
console.log(titulo);
console.log(enlaceFB);
console.log(enlacesSeguros);
console.log(boton);
console.log(boton2);
console.log(enlace);
console.log(formulario);
console.log(texto);

// Obtener y modificar elementos y atributos
const cajaParrafos = document.querySelector('#cajaTexto');
console.log(cajaParrafos.childNodes);
cajaParrafos.children[4].textContent = 'Cambio desde JS';
console.log(formulario.action);
formulario.action = '/controladores/guardar.php';
console.log(enlace.href);
console.log(boton2.id);

const input = document.querySelector('input');
console.log(input.value);
console.log(titulo.className.replace('fw-bold', ''));
console.log(titulo.classList);

titulo.classList.add('fs-6');
titulo.classList.remove('text-success');
titulo.classList.add('text-danger');

console.log(texto[1].textContent);
texto[1].textContent = 'Hola, he alterado el texto';

console.log(cajaParrafos.textContent);
console.log(cajaParrafos.innerText);
console.log(cajaParrafos.innerHTML);
console.log(cajaParrafos.outerHTML);

cajaParrafos.innerHTML = '<table></table>';

// Crear y añadir elementos al DOM
const tablaGenerada = document.createElement('table');
const parrafoNuevo = document.createElement('p');
parrafoNuevo.textContent = 'Párrafo creado desde JS';
parrafoNuevo.classList.add('text-info', 'fw-bold');

cajaParrafos.appendChild(tablaGenerada);
cajaParrafos.appendChild(parrafoNuevo);

// Navegación por el DOM
console.log(cajaParrafos.firstChild);
console.log(cajaParrafos.firstElementChild);
console.log(cajaParrafos.lastChild);
console.log(cajaParrafos.lastElementChild);
console.log(cajaParrafos.nextElementSibling);
console.log(cajaParrafos.nextSibling);
console.log(cajaParrafos.previousElementSibling.previousElementSibling);
console.log(cajaParrafos.parentElement);

// Modificar un elemento hermano
const enlaceHermano = document.querySelector('#email').parentElement.parentElement.parentElement.nextElementSibling;
enlaceHermano.href = 'https://cit.mindef.mil.gt';
enlaceHermano.textContent = 'Ir a AUTOCOM';
console.log(enlaceHermano);

// Añadir event listener
document.addEventListener('dblclick', (e) => {
  console.log(e);
});
