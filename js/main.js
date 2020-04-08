// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde.





// rendere il form scrivibile e alla fine del messaggio dare all'icona invio l'evento click. Poi salvare il value di quanto inserito in un p. Oppure creare nella funzione.



$( document ).ready(function() {


    // do l'evento click all icona di invio
    $('.fa-telegram-plane').click(
      function(){
        // salvo il valore dell'input in una variabile
          var messInv = $("#testojs").val();
          console.log(messInv);
          $('#outputjs').append(messInv).addClass('green-message');
      }
  )

    // $('#testojs').focusin(
    //   function(){
    //       $('.fa-telegram-plane').show();
    //       $('.fa-microphone').hide();
    //   }
    //
    // )
    //
    // $('#testojs').focusout(
    //   function(){
    //       $('.fa-telegram-plane').hide();
    //       $('.fa-microphone').show();
    //   }
    //
    // )


});
