// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.






// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
for (let i = 0; i < 1; i++) {

    const numPc = Math.floor(Math.random() * 10)
    const numUs = parseInt(Math.random() * 10)
    
    let message = 'Pareggio'
    
    if  (numPc > numUs) {
        message = 'Hai perso'
    } else if (numUs > numPc) {
        message = 'Hai vinto'
    }
    
    console.log('Numero Pc:',numPc)
    console.log('Numero Utente:', numUs)
    console.log(message)
}