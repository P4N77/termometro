let btn=document.getElementById("boton");


function conversion() {
  let grados = document.getElementById("ingreso").value;
  let grados2 = (grados-32)*5/9;
  document.getElementById("resul").innerHTML = grados2;
  document.getElementById("liquido").style.height =grados2+"%";
}
btn.addEventListener("click",conversion);

