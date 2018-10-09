var printNumero = document.getElementById('printNumero');
var printUsuario = document.getElementById('printUsuario');
var printNombre = document.getElementById('printNombre');
var printCorreo = document.getElementById('printCorreo');
var printFecha = document.getElementById('printFecha');
var idNumber = document.getElementById('id');
var tokenNumber = document.getElementById('token');
var pSuccessMes = document.getElementById('pSuccessMes');
var pMes = document.getElementById('pMes');

function borrar(){
  var id = idNumber.value;
  var token = tokenNumber.value;
  var row = "row"+id;
  var tableRow = document.getElementById(row);
  var xmlhttp;
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200) {
      var answer = JSON.parse(this.responseText);
      // answerUserName.innerHTML = this.responseText;
      if (answer['registerNum'] > 0) {
        pSuccessMes.innerHTML = answer['registerMes'];
        pMes.innerHTML = answer['mes'];
        var myVar2 = setInterval(function () {
          tableRow.innerHTML = "";
          clearInterval(myVar2);
        }, 2500);
        mensajeExito();
      } else {
        pSuccessMes.innerHTML = answer['registerMes'];
        pMes.innerHTML = answer['mes'];
        mensajeExito();
      }
    }
  }
  xmlhttp.open("POST","ajax/delete-user.ajax.php",true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send("id="+id+"&token="+token);
}
function mensajeExito() {
  var myVar = setInterval(okModal, 2500);
  function okModal(){
    $('#modalLoad').modal('hide');
    $('#modalSuccess').modal('show');
    clearInterval(myVar);
  }
}
