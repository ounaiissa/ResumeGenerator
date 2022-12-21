function GenerateCV3(){
    document.getElementById('Display').style.display = 'block';
}
SUBMIT.addEventListener("click", GenerateCV3);

$(document).ready(function(){
    $('#btn-print-this').click(function(){
      $('#Display').printThis();
    });
  });
  