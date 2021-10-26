const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const botonNombre = document.querySelector('#nombre + button'); //+hermano de nombre
const botonApellido = document.querySelector('#apellido + button');

const listaNombres = document.querySelector('.listaNombres');
const listaApellidos = document.querySelector('.listaApellidos');


botonNombre.addEventListener('click', () => {
  if(!inputNombre.value.trim()) {
    // Como ejemplo poríamos añadir este estilo para marcar que hay algún error
    inputNombre.style.outline = '4px solid tomato';
    return;
  }else {
    inputNombre.style.outline = 'none';

    const listItem = document.createElement('li');
    listItem.innerHTML = inputNombre.value;
    listItem.classList.add('fs-4');
    listaNombres.append(listItem);
  
    inputNombre.value = '';  
  }
});

const handleAddApellidos = () => {
  if(!inputApellido.value.trim()) {
    return;
  }
  const listItem = document.createElement('li');
  listItem.innerHTML = inputApellido.value;
  listItem.classList.add('fs-4');
  listaApellidos.append(listItem)

  inputApellido.value = '';
}

botonApellido.addEventListener('click', handleAddApellidos);































//clase de input nombrte: form-control
// const inputNombre = document.querySelector('#name');
// const inputApellido = document.querySelector('#apellido');
// const botonNombre = document.querySelector('#botonN');
// const botonApellido = document.querySelector('#botonA');

// let listaNombres = document.querySelector('.listaNombre');
// let listaApellidos = document.querySelector('.listaApellido')



// botonNombre.addEventListener('click',() => {
//   const listItem = document.createElement('li'); // creamos elemento en Li de memoria
//   listItem.innerHTML = inputNombre.value; //* para agregar lo que se escriba sera igual al input nombre que escribira
//   listItem.classList.add('listaN'); // añada clase 
//   listaNombres.append(listItem)

//   inputNombre.value = ''; // Ahora quiero que sea vacio
// });



// const handleAddApellidos = ()=>{
//   // console.log('hola');
//   const listItem = document.createElement('li');
//   listItem.innerHTML = inputApellido.value;
//   listItem.classList.add('listA');
//   listaApellidos.append(listItem);

//   inputApellido.value = '';
// }

// botonApellido.addEventListener('click', handleAddApellidos())




//* Ejercicio DOM 02 Crea un conversor de dólares a euros. Utiliza un input y un botón para recibir el valor que nos da el usuario y imprimirselo en pantalla convertido a euros.



// const Euro;
// const dolar;







// function añadir(){
// document.createElement('li')

// }

// nombre.addEventListener('click', alerta);
// console.log(inputNombre.value);