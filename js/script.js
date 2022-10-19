/*
- **Anni**: chiediamo all'utente la sua età e comunichiamo l'anno di nascita.
- Salutare: chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao <nome_utente>"
*/

/*
chiedere età
sottrarre a 2022 l'età
stampare il risultato nello span #year
*/

let eta = parseInt(prompt('Quanti anni hai?'));
let annoNascita = 2022 + eta;
document.getElementById('year').innerHTML = annoNascita;
console.log(annoNascita)
