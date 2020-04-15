// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde.


$( document ).ready(function() {

//  salvo riferimenti per poter salvare mess precedenti e dove stampare il mess

var msg = $('#testojs');
var outputJs = $('#outputjs'); // output mess verde
var outputAuto = $('#outputauto'); // output mess bianco
var contatti = $('.contatti'); // var per filtro contatti

    // do l'evento click all icona di invio
    $('.fa-telegram-plane').click(
      function(){
        // salvo il valore dell'input in una variabile
          var messInv = msg.val();
          console.log(messInv);
          outputJs.append('<div class="green-message">' + messInv + '<i class="fa fa-chevron-down f-right"></i>' + '</div>' + '<div class="opzioni">' +  "Cancella" +
          '</div>');
          msg.val(""); // cancello il msg precedentemente scritto dall'input form

          // messaggio automatico ok
        setTimeout(
          function(){

        outputAuto.append('<div class="white-message2">' + "Ok" + '<i class="fa fa-chevron-down f-right"></i>' + '</div>' + '</div>' + '<div class="opzioni">' +  "Cancella" +
        '</div>');
          }
        ,1000)

      }


  )

// funzione ricerca contatti

$('#filtro').keyup(
  function(){
// salvo input valore della ricerca
var ricercaCont = $(this).val().toLowerCase();

  contatti.each(
  function () {

var nomeCont = $(this).find('.nome-contatto').text().toLowerCase();

    if(nomeCont.includes(ricercaCont)){

      $(this).show();
    } else {
      $(this).hide();
    }

});

});

// mostrare contatto cliccato
$('.contatti').click(
function () {
  contatti.removeClass("active");
  $(this).addClass("active");
  var attr = $(this).data("conversazione");

  outputJs.removeClass("active");
  $('#outputjs[data-conversazione="' + attr + '"]').addClass("active");

});




$('#outputjs').mouseover(
  function(){
$('.fa.fa-chevron-down.f-right').toggle();

  });

  $('#outputjs').mouseleave(
    function(){
  $('.fa.fa-chevron-down.f-right').hide();

    });


    // $('.fa.fa-chevron-down.f-right').click(
    //   function(){
    // $('.opzioni').show();
    //
    //   });



});
