$(document).ready(function(){
  $('#perso').click(function(){
      $('.perso').show();
      $('.prof').hide();
  });

  $('#prof').click(function(){
    $('.prof').show();
    $('.perso').hide();
});
});

function GenerateCV2(){
    document.getElementById('cvDisplay').style.display = 'block';
}
Submit.addEventListener("click", GenerateCV2);


$(document).ready(function(){
    $('#btn-print-this').click(function(){
      $('#cvDisplay').printThis();
    });
  });
  

 