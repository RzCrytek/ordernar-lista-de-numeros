
$(function() {

  var addNumber = $('#add-number');
  var iptNumber = $('#number');
  var boxListNumber = $('#box-list-number');
  var btnOrderNumbers = $('#btn-order-numbers');

  var BoxMsg = $('.message-error');
  var form = $('#form');

  var ListNumber = [];

  function addNumberList(e){
    e.preventDefault();

    var isValid = form.valid();

    if (isValid == true ) {

      var val = iptNumber.val();
      iptNumber.val('');
      iptNumber.focus();

      checkNumber(val);

    } else {
      isValid;
    }

  }

  function checkNumber(num){
    var newNumber;
    var numExist = ListNumber.indexOf(num);
    
    if (numExist == -1) {
      ListNumber.push(num) -1;
      newNumber = '<p class="num">'+num+'</p>';
      boxListNumber.append(newNumber);
    } else {

      BoxMsg.addClass('active');
      BoxMsg.text('El número ya existe');

      setTimeout(function(){
        BoxMsg.removeClass('active');
        BoxMsg.text('');
      },1500);
    }

  }

  function orderNumbers(){

    var mayor;

    if (boxListNumber.children().length == 0) {

      BoxMsg.addClass('active');
      BoxMsg.text('No hay números para ordenar.');

      setTimeout(function(){
        BoxMsg.removeClass('active');
        BoxMsg.text('');
      },1000);

    }

    boxListNumber.html('');

    for ( var i=0; i < (ListNumber.length-1); i++ ){

      for( j=0; j < (ListNumber.length-i); j++ ){

        if ( ListNumber[j] > ListNumber[j+1] ) {
          
          mayor = ListNumber[j];

          ListNumber[j] = ListNumber[j+1];

          ListNumber[j+1] = mayor;
        }
      }
    }

    ListNumber.forEach(function(elem, val) {
      item = '<p class="num">'+elem+'</p>';
      boxListNumber.append(item);
    });

  }


  btnOrderNumbers.on('click', orderNumbers);

  addNumber.on('click', addNumberList);

});
