document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);

  // let db = new DB('https://desgosto-final.firebaseio.com/')
  //
  //
  // db.download(db, function(data) {
  //     // Printing the data contained on that path on firebase
  //     console.log(data)
  //
  // // let name = document.querySelector('.name')
  // // name.innerHTML = "nome sério"
  // });
});






$(document).ready(function ()
    {
        $('.click').click(function ()
        {
            var elements = $('.click');
            elements.each(function(){
                $(this).removeClass('active');
            });
            $(this).addClass('active');
        })
        $('#submit_quiz').click(function ()
       {
           // Desseleciona a resposta selecionada
           var elements = $('.click');
           elements.each(function ()
           {
               $(this).removeClass('active');
           });

          // Faz alguma coisa quando clica no botão enviar
       });
       $('.dropdown-trigger').dropdown({
            closeOnClick: false,
        });
    });
