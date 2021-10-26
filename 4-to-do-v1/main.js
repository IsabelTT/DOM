// cazar
const inputToDo = document.querySelector('#inputToDo');
const form = document.getElementById('form1')
const botonAdd = document.getElementById('botonNormal');


const handleClick = (evento) => {
  console.log('evento');
}

//Array.forEach


// El formulario tiene evento submit
form.addEventListener('submit', (evento) => handleClick(evento));

