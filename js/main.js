

$(document).ready(function(){
 var height = $(window).height();
 var width = $(window).width();
 
setInterval(function(){  $(".notification").css("margin-top",height - 230);


  }, 100);

if(document.getElementById('radio1').checked) {
  alert("radio1 is selected");
}else if(document.getElementById('radio2').checked) {
  alert("radio2 is selected");
}
else if(document.getElementById('radio3').checked) {
  alert("radio3 is selected");
}


});


 
