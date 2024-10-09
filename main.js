// Salvo le variabili fisse che serviranno per calcolare il prezzo finale del biglietto

const kmPrice = 0.21;
const underAge = 18;
const overAge = 65;
const underDiscount = 20;
const overDiscount = 40;


// prendere il form dal dom

const myForm = document.getElementById('calculator-form');

// prendo i campi dal form

const userKm = document.getElementById('user-km');
const userAge = document.getElementById('user-age');
const resultContainer = document.getElementById('result-container');
const resultText = resultContainer.querySelector('h3');


// quando invio il form leggo i dati inseriti

myForm.addEventListener('submit', function(event){

    event.preventDefault();

    console.log('prova invio form');
    console.log('Km: ', userKm.value);
    console.log('Age: ', userAge.value);
   
    
    


    // in funzione dei dati calcolo il prezzo

    let price = kmPrice * userKm;
    console.log(price);


    // restituisco un output

    userKm.value = '';
    userAge.value = '';

    resultText.innerHTML = 'Il prezzo del biglietto è di € ', price;
    resultContainer.classList.remove('d-none');
})

