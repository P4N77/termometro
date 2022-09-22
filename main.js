let btn=document.getElementById("boton");


function conversion() {
  let grados = document.getElementById("ingreso").value;
  let grados2 = (grados-32)*5/9;
  document.getElementById("resul").innerHTML = grados2;
  document.getElementById("liquido").style.height =grados2+"%";
}
btn.addEventListener("click",conversion);

let btn2=document.getElementById("boton2");
function reinicio() {
  document.getElementById("resul").innerHTML = "";
document.getElementById("liquido").style.height ="0px";
document.getElementById("ingreso").value="" ;
}
btn2.addEventListener("click",reinicio);

