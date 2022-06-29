                            //CODIGOS.JS LA HORA //

const time = document.getElementById(`time`);
const date = document.getElementById(`date`);

const monthNames = ["Janury", "February", "March", "april", "may", "June", "July", "August", "September", "Octuber", "November", "December"];

const interval = setInterval(() =>{
  const local = new Date();

  let day = local.getDate(),
  month = local.getMonth(),
  year = local.getFullYear();

  time.innerHTML = local.toLocaleTimeString();
  date.innerHTML = `${day} ${monthNames[month]} ${year}`;

}, 1000);


//============================================================================================

                             // CODIGOS JS. EL CRONOMETRO//
 
var i = 0;
var Iniciar;
function Crono() {
    i++;
    var Cen = i;

    var iCen = Cen % 100;
    var iSeg = Math.round((Cen - 50) / 100);
    var iMin = Math.round((iSeg - 30) / 60);
    iSeg = iSeg % 60;

    var sCen = "" + ((iCen > 9) ? iCen : "0" + iCen);
    var sSeg = "" + ((iSeg > 9) ? iSeg : "0" + iSeg);
    var sMin = "" + ((iMin > 9) ? iMin : "0" + iMin);

    contador.innerHTML = (sMin + ":" + sSeg + ":" + sCen);
}
function IniciarCrono() {
    PararCrono();
    contador.innerHTML = ("00:00:00");
}
function EncenderCrono() {
    if (i !== 0) { return; }
    Iniciar = setInterval(Crono, 10);
}
function PararCrono() {
    clearInterval(Iniciar);
    i = 0;
}








//====================================================================================


function cargarEjemplo(){
  document.getElementById("NumerosEjem").value="6,99,56,15,68";
}
function reiniciar(){
  location.reload();
}
function calcular(){
  let varlores_array=document.getElementById("numerosEjem").value.split(/,/);
  let mayor= -Infinity;
  let menor= +Infinity;
  let suma=0;
  let promediar=0;

//Sumar
    for(let i=0;i<varlores_array.length;i++){
      suma=parseInt(varlores_array[i])+suma;
    }
//Obtener el mayor
    for(let i=0;i<varlores_array.length;i++){
      if(parseInt(varlores_array[i])>mayor) mayor=varlores_array[i];
    }
//Obtener el menor    
for(let i=0;i<varlores_array.length;i++){
  if(parseInt(varlores_array[i])<menor) menor=varlores_array[i];
}   



    document.getElementById("Resultado").innerHTML="La suma es : "+ suma+"<br>"+
                                                  "El mayor numero  es : "+ mayor+"<br>"+
                                                   "El menor numero es :  "+ menor;

}
//====================================================================================
setInterval(muestraFrase,2000);

let frases=["Solo sé que no se","El que la persigue la consigue","Dime con quien andas y te dire quien eres","El que estudia triunfa"];

let indice=0;
function muestraFrase(){
  indice++;
  if(indice>=frases.length){
        indice=0;
  }
  document.getElementById("frases").innerHTML=frases[indice];
}
//====================================================================================

let colores=[];

function agregaColor(evt){
    evt.preventDefault();

    let nom=document.getElementById("colores").value;

    if(nom==""){
        alert("El campo no puede estar vacio");
    }else if(!existeNombre(nom)){
        let opcion ="<li>"+nom+"</li>";
        let lista=document.getElementById("listaC");

        lista.innerHTML+=opcion;
        colores.push(nom);
    }else{
        alert("El color existe");
    }

}
function existeNombre(nombre){
    //busca nombre
    
    for(let i=0;i<colores.length;i++){
        const elemento=colores[i];
        if(elemento.trim().toLowerCase()===nombre.trim().toLowerCase()){
            return true;
        }
    }
    return false;
 }
