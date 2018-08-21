
$(function() {

  var form = $('#form');
  var iptNumber = $('#number');


  form.on('submit', function(e){
    e.preventDefault();
  });

  iptNumber.keydown(function(e) {
    var a = e.key;
    if (a.length == 1) return /[0-9]|\+|-/.test(a);
    return true;
  });

  form.validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
      number: {
        required: true,
        maxlength: 60
      }

    },
    highlight: function(element) {
      var el = $(element);
      el.addClass('error');
    },
    unhighlight: function(element) {
      var el = $(element);
      el.removeClass('error');
    },
    errorPlacement: function(error, element) {}

  });

});
