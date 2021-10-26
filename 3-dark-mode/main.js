//cazar elementos
const boton = document.querySelector('.botonDark');
const texto = document.querySelector('.texto');

const isDark = false;
//Evento
boton.addEventListener('click', ()=>{
  if(isDark===false){
    console.log('click');
  document.body.classList.add('dark');
}
})

// Quiero cambiar de color el texto de color verde
const isgreen = false;

texto.addEventListener('click', () =>{
if(isgreen ===false){
  document.body.classList.add('')
}

});

