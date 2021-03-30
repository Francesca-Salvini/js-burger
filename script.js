// Calcolo il prezzo dell'hamburger partendo da un prezzo base (10$)

// L'utente può scegliere tramite checkbox quali ingredinti aggiungere al panino

// Ogni ingrediente avrà un prezzo, questo si aggiungerà al prezzo base del panino

// C'è la possibilità di usufruire di un buono sconto del 20% inserendo un coupon

// al click del bottone calcola, mi genera il prezzo del panino
var calcolaButton = document.getElementById('calcola');
calcolaButton.addEventListener( 'click', function (){

    // se non do un nome al burger, non posso calcolare il prezzo finale
    //
    // se la lunghezza del nome del burger è pari a 0, un alert mi avverte
    // di compilare l'apposita sezione
    var nameYourBurger = document.getElementById('name-your-burger');
    var nomeBurger = nameYourBurger.value;
    console.log(nomeBurger);
    if(nomeBurger.length == 0 ) {
        alert('You have to name your burger! ');
    } else {
        var prezzoBasePanino = 10; //prezzo di partenza del panino

        var addonCheckboxes = document.getElementsByClassName('addon');
        // console.log(addonCheckboxes);
        
        for(var i = 0; i < addonCheckboxes.length; i++) {
            var thisCheckbox = addonCheckboxes[i];
            // console.log(thisCheckbox);
        
            // console.log( i, thisCheckbox.checked);
            // console.log( i, thisCheckbox.value);
        
            if(thisCheckbox.checked == true ) {
                //condidera i valori inseriti negli input 
                var thisPrice = parseInt(thisCheckbox.value);   
                // console.log( i, thisPrice);
        
                prezzoBasePanino = prezzoBasePanino + thisPrice;
                
            }
            
        }
        
        console.log(prezzoBasePanino); //anteprima del prezzo finale
        
        //STAMPO prezzo a schermo (nel footer)
        document.getElementById('your-price').innerHTML = prezzoBasePanino + '$';
    
    }

});
        
        


