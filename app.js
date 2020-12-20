
/* Obtiene en la variable de nombre box un NodeList cuyos elementos son
aquellos que en nuestro documento HTML tienen definido la clase 'box' */
let box = document.querySelectorAll('.box');

/* 
    A los elementos que se le da clic le aplica la clase llamada 'active',
    si el elemento ya cuenta con dicha clase entonces se la remueve.
*/
box.forEach( popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active');
}));





// Recordemos:

/* console.log("*** Recorriendo el array con un forEach ***");
array1.forEach( element => console.log(element)); */
