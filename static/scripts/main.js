
$(function() {

  var addNumber = $('#add-number');
  var iptNumber = $('#number');
  var boxListNumber = $('#box-list-number');
  var btnOrderNumbers = $('#btn-order-numbers');

  var BoxMsg = $('.message');
  var form = $('#form');

  var ListNumber = [];

  // se valida que se ingrese un número
  function addNumberList(e){
    e.preventDefault();

    var isValid = form.valid();

    if (isValid == true ) {

      var val = iptNumber.val();
      iptNumber.val('');
      iptNumber.focus();

      checkNumber(parseInt(val));

    } else {
      isValid;
    }

  }

  // funcion para mostrar los mensages de error o alerta.
  function messageError(text, status){

    var className = ( status === undefined ) ? 'active' : status;

    BoxMsg.addClass(className);
    BoxMsg.text(text);

    setTimeout(function(){
      BoxMsg.removeClass(className);
      BoxMsg.text('');
    },1500);

  }

  // se verifica que el número que se va agregar no se repita.
  function checkNumber(num){
    var newNumber;
    var numExist = ListNumber.indexOf(num);
    
    if (numExist == -1) {
      ListNumber.push(num) -1;
      newNumber = '<p class="num">'+num+'</p>';
      boxListNumber.append(newNumber);
    } else {
      messageError('El número ya existe.');
    }

    // console.log(ListNumber);

  }

  function orderNumbers(){

    var mayor;
    var length = boxListNumber.children().length;

    if ( length == 0) {
      messageError('No hay números para ordenar.');

    } else if (length == 1) {
      messageError('No hay suficientes números para ordenar.');
    }

    boxListNumber.html('');


    for ( var i=0; i < (ListNumber.length-1); i++ ){

      for( j=0; j < (ListNumber.length-i); j++ ){


        if ( ListNumber[j] > ListNumber[j+1] ) {
          
          mayor = ListNumber[j];

          ListNumber[j] = ListNumber[j+1];

          ListNumber[j+1] = mayor;

        } 
        else {
          // console.log('se termino');
          messageError('Se termino de ordenar.', 'success');
        }
      }
    }

    // console.log(ListNumber);

    ListNumber.forEach(function(elem, val) {
      item = '<p class="num">'+elem+'</p>';
      boxListNumber.append(item);
    });

  }


  btnOrderNumbers.on('click', orderNumbers);

  addNumber.on('click', addNumberList);

});
