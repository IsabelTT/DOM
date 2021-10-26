//*1ro cazar elementos : OJO
// .(clases), #(id) ,etiquetas con su nombre 
const input = document.querySelector('.input');
const boton = document.querySelector('.btn1');
const h1 = document.querySelector('h1')
const h3 = document.querySelector('h3');
const ul = document.querySelector('.lista');

//*Eventos

//Opcion 1: Creando una funcion aparte para ponerla en el callback del evento. ( gneralmente cuando las funciones son largas)
//  const handleClick = () => {
//    console.log('Has hecho click');
//    h1.style.backgroundColor = 'tomato';
//  }
// Creando el evento 'click'y reemplazando callback creado. Escuchador de eventos(evento, callback:¿que quieres que haga?)
// boton.addEventListener('click', handleClick)  // si en lugar de pasarle la funcion le pasas un string, se activa sin hacerle clik. OJO. Se debe crear func flecha
// boton.addEventListener('click', handleClick('Ivan') =>{

// }) 


// Opcion 2: Creando el evento 'click' con una funcion anonima. En este caso la funcion se crea dentro del 2do parametro.
h3.addEventListener('click', () =>{  // con funcion anonima
document.body.style.backgroundColor = 'gray'
});

document.addEventListener('mousemove',(e)=>{
console.log(e);
});


//------------------------------------------------------------

//*Pasos para crear elementos:  Cuando haga click quiero CREAR un elemento :
const handleClick = () => {
  console.log('Has hecho click');
  h1.style.backgroundColor = 'tomato';

//1 Crear la etiqueta en memoria
  const li = document.createElement('li') // creando element 
  console.log(li);
// 2. Añadirle el contenido que queramos
  li.innerHTML = 'Item de la lista 1'
//3.- Añadrile clases, atributos o estilos o lo que queramos
li.classList.add('list-item');

//4 Añadir el elemento a HTML
// ul.append (li); // lo añade dentro y al final
// ul.prepend(li); // lo añade dentro y al principio
ul.after(li); // lo añade fuera despues
ul.before(li); //lo añade fuera ante


console.log(li);
 } //*Final de la llave de callback handleclick


