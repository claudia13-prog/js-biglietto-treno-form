// prendere il form dal dom

const myForm = document.getElementById('calculator-form');

// prendo i campi dal form

const userKm = document.getElementById('user-km');
const userAge = document.getElementById('user-age');


// quando invio il form leggo i dati inseriti

myForm.addEventListener('submit', function(event){

    event.preventDefault();

    console.log('prova invio form');
    console.log('Km: ', userKm.value);
    console.log('Age: ', userAge.value);

})
// in funzione dei dati calcolo il prezzo
// restituisco un output