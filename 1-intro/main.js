
const subtitulo = document.getElementsByClassName('subtitulo')  //* ya no  se utiliza mucho

//*Cazar elementos

const h1 = document.getElementById('titulo');

// querySelector : coge el 1er elemento que se le pide
const query = document.querySelector('.subtitulo') //* caza todo, por selector. Escribe cualquier regla css (.)clase (#) id //  Devuelve el 1er elemento que encuentre. 
const queryParrafo = document.querySelector('p') //* caza todo, por selector. parafo
const span = document.querySelector('p span') //* caza todo, por selector. p dentro esta la clase span.
// querySelectorAll: coge todos los elementos que se le pide
const todosSpan = document.querySelectorAll('p span') //* caza todo, por selector. Escribe cualquier regla css
const p2 = document.querySelector('.parrafo2')
const ul= document.querySelector('ul')
const boton = document.querySelector('button')
const a = document.querySelector('a')

console.log(h1, p2, query);

//* Modificar su contenido
// p.innerHTML = 'Esto es <strong> asdf</strong> mi nuevo parrafo';
//innerHTML // modifica el texto// lo interpreta como html. lo pone en negrita en el ejemplo. ( strong)
//


//innerText // lo interpreta como texto
//h1.innerText = le digo lo que va a valer

//* cambiar sus estilos en linea // no utiliza guiones, hay que quitarlas y poner mayusculas
h1.style.backgroundColor = 'tomato';
h1.style.color = 'white';

ul.style.listStyle = 'none';

todosSpan.forEach((span)=> span.style.color = 'ligthblue')

//* Añadir o quitar clases
//ClassName te da un string con todas las clases que tenga el elemento y si quieres sobreescribir tendras que escribirlas todas.
boton.className = 'btn btn-primary text'; // Dice: quedate con las clases que tienes y agregale la clase text.

boton.classList.add('botonChulo'); // con metodo add() se añade una nueva clase
boton.classList.remove('btn'); // con metodo remove() removemos la clase btn

boton.classList.replace('btn-primary','btn-secundary'); // cambia uno por el otro (,)
//* con toggle si tiene la clase, se la quita y si no la tiene se la añade
boton.classList.toggle('textBold') // Si no tiene esa linea se la pone, si la tiene se la quita. Se utiliza para botones gnral, 

//*Añadir 
// p2.setAttribute()
a.setAttribute('href', 'http://google.com')
a.setAttribute('tittle', 'Titulo de mi link')
a.setAttribute('name', 'Link 1');
a.setAttribute('data-ciudad', 'Barcelona');


console.log(a.getAttribute('href'));